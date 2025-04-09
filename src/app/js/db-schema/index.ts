import { pgTable, varchar, boolean, serial } from "drizzle-orm/pg-core"

const formDataTable = pgTable("form_data", {
	id: serial("id").primaryKey(),
	description: varchar("description", { length: 1000 }),
	firstName: varchar("first_name", { length: 100 }),
	lastName: varchar("last_name", { length: 100 }),
	email: varchar("email", { length: 255 }),
	mobile: varchar("mobile", { length: 15 }),
	state: varchar("state", { length: 10 }),
	postcode: varchar("postcode", { length: 4 }),
	receivePromotions: boolean("receive_promotions"),
})

export default formDataTable

/**
 * To update database structure, change it here then
 * yarn generate
 * npx drizzle-kit push
 */
