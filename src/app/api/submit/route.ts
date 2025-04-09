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
			agreeToTerms,
		} = await req.json()

		await db.insert(formDataTable).values({
			firstName,
			lastName,
			email,
			mobile,
			state,
			postcode,
			recievePromotions,
			agreeToTerms,
		})

		return NextResponse.json(
			{ message: "Form submitted successfully" },
			{ status: 200 }
		)
	} catch (error: any) {
		console.error("Error submitting form:", error)
		return NextResponse.json(
			{ message: "Something went wrong", error: error.message },
			{ status: 500 }
		)
	}
}
