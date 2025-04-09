import { NextResponse } from "next/server"
import { eq } from "drizzle-orm"
import { FormData } from "@/app/js/form-schema"
import config from "../../../../next.config"
import db from "../../js/db"
import formDataTable from "../../js/db-schema"

const submissionExists = async (email: string): Promise<boolean> => {
	const existingSubmission = await db
		.select()
		.from(formDataTable)
		.where(eq(formDataTable.email, email))
		.limit(1)

	return existingSubmission.length > 0
}

const addSubmission = async (data: FormData) => {
	await db.insert(formDataTable).values(data)
}

export async function POST(req: Request) {
	try {
		const data: FormData = await req.json()
		console.log(data)
		if (
			!config.allowMultipleSubmissions &&
			(await submissionExists(data.email))
		) {
			return NextResponse.json(
				{ message: "An entry has already been submitted for this email." },
				{ status: 400 }
			)
		}

		await addSubmission(data)

		return NextResponse.json(
			{ message: "Form submitted successfully" },
			{ status: 200 }
		)
	} catch (error: any) {
		return NextResponse.json(
			{ message: "Something went wrong. Please try again." },
			{ status: 500 }
		)
	}
}
