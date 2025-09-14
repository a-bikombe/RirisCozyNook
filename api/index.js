import express from "express";
import { Pool } from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

/** Prefer a single DATABASE_URL if you have one (Neon/Supabase).
 *  Otherwise use the discrete PG* vars. Ensure PGPORT is a number.
 *  Set PGSSL=true for hosted DBs that require SSL (e.g., Neon).
 */
const useConnString = !!process.env.DATABASE_URL;
const pool = new Pool(
    useConnString
        ? {
              connectionString: process.env.DATABASE_URL,
              ssl:
                  process.env.PGSSL === "true"
                      ? { rejectUnauthorized: false }
                      : undefined,
          }
        : {
              user: process.env.PGUSER || "postgres",
              host: process.env.PGHOST || "localhost",
              database: process.env.PGDATABASE || "mydb",
              password: process.env.PGPASSWORD || "",
              port: parseInt(process.env.PGPORT || "5432", 10),
              ssl:
                  process.env.PGSSL === "true"
                      ? { rejectUnauthorized: false }
                      : undefined,
          },
);

// verify DB at startup
(async () => {
    try {
        const c = await pool.connect();
        const { rows } = await c.query("SELECT 1 as ok");
        console.log("DB ok:", rows[0]);
        c.release();
    } catch (e) {
        console.error("DB connection failed:", e.message);
    }
})();

// health route for quick checks
app.get("/api/health/db", async (_req, res) => {
    try {
        const { rows } = await pool.query("SELECT 1 as ok");
        res.json({ db: "up", ok: rows[0].ok });
    } catch (e) {
        res.status(500).json({ db: "down", error: e.message });
    }
});

// all facts
app.get("/api/bunny-facts", async (_req, res) => {
    try {
        const result = await pool.query(
            "SELECT id, fact FROM bunny_facts ORDER BY id",
        );
        res.json(result.rows);
    } catch (err) {
        console.error("GET /api/bunny-facts error:", err.message);
        res.status(500).json({ message: err.message });
    }
});

// random fact
app.get("/api/bunny-facts/random", async (_req, res) => {
    try {
        const { rows } = await pool.query(`
      SELECT id, fact FROM bunny_facts
      ORDER BY RANDOM() LIMIT 1
    `);
        if (rows.length === 0)
            return res.status(404).json({ message: "No facts yet" });
        res.json(rows[0]);
    } catch (err) {
        console.error("GET /random error:", err.message);
        res.status(500).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Backend running on http://localhost:${PORT}`),
);