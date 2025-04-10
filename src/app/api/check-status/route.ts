import { competitionHasClosed } from "@/utilities"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    if (competitionHasClosed()) {
      return NextResponse.json({ message: "Form is closed" }, { status: 400 })
    }

    return NextResponse.json({ message: "Form is open" }, { status: 200 })
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
