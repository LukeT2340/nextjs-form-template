import { pgTable, varchar, boolean } from "drizzle-orm/pg-core"

const formDataTable = pgTable("form_data", {
	firstName: varchar("first_name", { length: 100 }),
	lastName: varchar("last_name", { length: 100 }),
	email: varchar("email", { length: 255 }).primaryKey(),
	mobile: varchar("mobile", { length: 15 }),
	state: varchar("state", { length: 10 }),
	postcode: varchar("postcode", { length: 4 }),
	recievePromotions: boolean("recieve_promotions"),
})

export default formDataTable
