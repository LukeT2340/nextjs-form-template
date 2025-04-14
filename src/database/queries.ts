import { eq } from "drizzle-orm";
import { FormData } from "@/components/Form/form-schema";
import db from "@/database/drizzle";
import formDataTable from "@/database/schema";

/**
 * @description Check if a submission already exists for the given email.
 * @param {string} email - The email address to check.
 * @returns {Promise<boolean>} - True if a submission exists, false otherwise.
 */
export const submissionExists = async (email: string): Promise<boolean> => {
  const existingSubmission = await db
    .select()
    .from(formDataTable)
    .where(eq(formDataTable.email, email))
    .limit(1);

  return existingSubmission.length > 0;
};

/**
 * @description Add a new submission to the database.
 * @param {FormData} data - The form data to be inserted.
 * @returns {Promise<void>}
 */
export const addSubmission = async (data: FormData): Promise<void> => {
  await db.insert(formDataTable).values(data);
};
