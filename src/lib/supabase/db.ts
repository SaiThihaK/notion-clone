import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";
dotenv.config({ path: ".env" });
if (!process.env.DATABASE_URL) {
  console.log("Database is not found");
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });
const migrateDB = async () => {
  try {
    console.log("Migrate Client");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("succesfully Migrated!!");
  } catch (error) {
    console.log("Error Migration client !!!");
  }
};
export {};
