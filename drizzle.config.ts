import { defineConfig } from "drizzle-kit"

export default defineConfig({
	dialect: "postgresql",
	schema: "./src/app/js/db-schema",
	out: "./drizzle",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
})
