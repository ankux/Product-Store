import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// exporting postgresql connection string by creating a SQL connection using env variables
// this sql function we export is used as a tagged template literal, which allows us to write SQL queries safely
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)