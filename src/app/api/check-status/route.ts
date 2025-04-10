import { NextResponse } from "next/server"
import config from "@/app/form.config"

export const competitionHasClosed = (): boolean => {
  const now = new Date()
  const closeDate = config.closeDate
  return now > closeDate
}

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
