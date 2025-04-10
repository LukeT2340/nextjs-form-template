import { NextRequest, NextResponse } from "next/server"
import { FormData } from "@/components/Form/form-schema"
import { addSubmission, submissionExists } from "@/database/queries"
import config from "@/app/form.config"
import { competitionHasClosed } from "../check-status/route"

export async function POST(req: NextRequest) {
  try {
    const data: FormData = await req.json()

    // Check status of competition
    if (competitionHasClosed())
      return NextResponse.json(
        { message: "The competition has closed." },
        { status: 400 }
      )

    // Check if a submission already exists for user (if not allowed)
    if (
      !config.allowMultipleSubmissions &&
      (await submissionExists(data.email))
    ) {
      return NextResponse.json(
        { message: "An entry has already been submitted for this email." },
        { status: 400 }
      )
    }

    // Add submission to DB
    await addSubmission(data)

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
