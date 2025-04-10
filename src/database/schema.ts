import { pgTable, varchar, boolean, serial } from "drizzle-orm/pg-core"

const formDataTable = pgTable("form_data", {
  id: serial("id").primaryKey(),
  description: varchar("description", { length: 1000 }).notNull(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  mobile: varchar("mobile", { length: 15 }).notNull(),
  state: varchar("state", { length: 4 }).notNull(),
  postcode: varchar("postcode", { length: 4 }).notNull(),
  receivePromotions: boolean("receive_promotions").notNull(),
})

export default formDataTable

/**
 * To update database structure, change it here then
 * yarn generate
 * npx drizzle-kit push
 */
