ALTER TABLE "form_data" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "form_data" ALTER COLUMN "first_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "form_data" ALTER COLUMN "last_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "form_data" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "form_data" ALTER COLUMN "mobile" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "form_data" ALTER COLUMN "state" SET DATA TYPE varchar(4);--> statement-breakpoint
ALTER TABLE "form_data" ALTER COLUMN "state" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "form_data" ALTER COLUMN "postcode" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "form_data" ALTER COLUMN "receive_promotions" SET NOT NULL;