import { NextResponse } from "next/server"
import { eq } from "drizzle-orm"
import config from "../../../../next.config"
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
			receivePromotions,
			description,
		} = await req.json()

		if (!config.allowMultipleSubmissions) {
			const existingSubmission = await db
				.select()
				.from(formDataTable)
				.where(eq(formDataTable.email, email))
				.limit(1)

			if (existingSubmission.length > 0) {
				return NextResponse.json(
					{ message: "An entry has already been submitted for this email." },
					{ status: 400 }
				)
			}
		}

		await db.insert(formDataTable).values({
			firstName,
			lastName,
			email,
			mobile,
			state,
			postcode,
			receivePromotions,
			description,
		})

		return NextResponse.json(
			{ message: "Form submitted successfully" },
			{ status: 200 }
		)

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		return NextResponse.json(
			{ message: "Something went wrong. Please try again." },
			{ status: 500 }
		)
	}
}
