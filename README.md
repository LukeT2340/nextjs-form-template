# NextJS Typescript Form Template with Neon PostgreSQL DB

This is a template that can be used for immersives that include forms (e.g. competitions).

## Technologies used

-   NextJS w/ Typescript
-   Neon PostgreSQL DB
-   Tailwind CSS

## Getting Started

1. Create a PostgreSQL database using [Neon's dashboard](https://console.neon.tech/app/projects "Title") and copy the database connection string.

2. Create a .env file in the root of your project (same level as src and package.json) and paste the database connection string in there. This connection string should only be accessed within the API (should not appear in client-side js). This ensures that no one else can use it to read or manipulate the DB.

    ```env
    DATABASE_URL=<--DATABASE connection string here-->
    ```

3. Install npm packages:

    ```bash
    yarn
    ```

4. Then run the development server:
    ```bash
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating and changing the database schema

1. Change schema in **src/database/schema.ts**
2. Update Neon's schema to match schema.ts
    ```bash
    yarn generate
    npx drizzle-kit push
    ```
    Note: Be careful as this could delete existing entries if existing data isn't compatible with the new schema. But should warn you before it does
