import { eq } from "drizzle-orm"
import { FormData } from "@/components/Form/form-schema"
import db from "@/database/drizzle"
import formDataTable from "@/database/schema"

export const submissionExists = async (email: string): Promise<boolean> => {
  const existingSubmission = await db
    .select()
    .from(formDataTable)
    .where(eq(formDataTable.email, email))
    .limit(1)

  return existingSubmission.length > 0
}

export const addSubmission = async (data: FormData) => {
  await db.insert(formDataTable).values(data)
}
