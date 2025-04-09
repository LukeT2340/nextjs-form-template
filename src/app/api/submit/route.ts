import { NextResponse } from "next/server"
import db from "../../js/db"
import formDataTable from "../../js/db-schema"

export async function POST(req: Request) {
	try {
		const {
			firstName,
			lastName,
			email,
			mobile,
			state,
			postcode,
			recievePromotions,
			description,
		} = await req.json()

		await db.insert(formDataTable).values({
			firstName,
			lastName,
			email,
			mobile,
			state,
			postcode,
			recievePromotions,
			description,
		})

		return NextResponse.json(
			{ message: "Form submitted successfully" },
			{ status: 200 }
		)
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error("Error submitting form:", error.code)
		if (error.code === "23505")
			return NextResponse.json(
				{ message: "An entry has already been submitted for this email." },
				{ status: 500 }
			)

		return NextResponse.json(
			{ message: "Something went wrong. Please try again." },
			{ status: 500 }
		)
	}
}
