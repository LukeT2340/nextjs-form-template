import { NextResponse } from "next/server";
import { competitionHasClosed } from "../../utilities";

/**
 * @description Endpoint to check the status of the competition.
 * Flow:
 * 1. Check if the competition has closed using utility function (This function compares the current date and time to the one defined in app.config.ts).
 * 2. If the competition is closed, return a 403 response.
 * 3. If the competition is open, return a 200 response.
 * 4. Handle any errors that may occur during the process.
 * @returns {Promise<NextResponse>} JSON response indicating status of the competition.
 */
export async function GET(): Promise<NextResponse> {
  try {
    // Check if the competition has closed
    if (competitionHasClosed()) {
      return NextResponse.json({ message: "Form is closed" }, { status: 403 });
    }

    // Competition is open response
    return NextResponse.json(
      { message: "Competition is open" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
