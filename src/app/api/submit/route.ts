import { NextRequest, NextResponse } from "next/server";
import { FormData } from "@/components/Form/form-schema";
import { addSubmission, submissionExists } from "@/database/queries";
import config from "@/app/app.config";
import { competitionHasClosed, normalizeEmail } from "../../utilities";

/**
 * @description Endpoint to handle form submission.
 * Flow:
 * 1. Check if the competition has closed.
 * 2. Check if a submission already exists for the user (if not allowed).
 * 3. Add the submission to the database.
 * 4. Return success or error response.
 *
 * IT SHOULD ONLY BE POSSIBLE TO EDIT THE DATABASE THROUGH THIS ENDPOINT
 * The DATABASE_URL environment variable shouldn't be accessible in the client-side code
 * @returns {Promise<NextResponse>} JSON response indicating success or failure.
 */
export async function POST(req: NextRequest): Promise<
  NextResponse<{
    message: string;
  }>
> {
  try {
    // Parse the request body
    const data: FormData = await req.json();

    // Check status of competition again (because direct post requests to this endpoint can bypass the check-status endpoint)
    if (competitionHasClosed())
      return NextResponse.json(
        { message: "The competition has closed." },
        { status: 400 }
      );

    // Convert to lowercase and remove fullstops from GMAIL addresses
    const normalizedEmail = normalizeEmail(data.email);

    // Check if a submission already exists for user (if not allowed)
    if (
      !config.allowMultipleSubmissions &&
      (await submissionExists(normalizedEmail))
    ) {
      return NextResponse.json(
        { message: "An entry has already been submitted for this email." },
        { status: 400 }
      );
    }

    // Add submission to DB
    await addSubmission(data);

    // Return success response
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
