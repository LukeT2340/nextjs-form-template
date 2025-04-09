ALTER TABLE "form_data" RENAME COLUMN "recieve_promotions" TO "receive_promotions";--> statement-breakpoint
/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'form_data'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "form_data" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "form_data" ALTER COLUMN "email" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "form_data" ADD COLUMN "id" serial PRIMARY KEY NOT NULL;