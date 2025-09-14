import { neon, neonConfig } from "@neondatabase/serverless";
export const runtime = 'edge';
// tiny perf win on serverless
neonConfig.fetchConnectionCache = true;

if (!process.env["DATABASE_URL"]) {
    // don't leak secrets, just a clear error
    throw new Error("DATABASE_URL is not set in environment");
}

export const sql = neon(process.env["DATABASE_URL"]);