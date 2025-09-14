require("dotenv").config();
import express from "express";
import { Pool } from "pg";
import cors from "cors";

const app = express();
app.use(cors());

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

// test route
app.get("/api/bunny-facts", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM bunny_facts");
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get("/api/bunny-facts/random", async (req, res) => {
    try {
        const { rows } = await pool.query(`
      SELECT id, fact
      FROM bunny_facts
      ORDER BY RANDOM()
      LIMIT 1
    `);
        if (rows.length === 0)
            return res.status(404).json({ message: "No facts yet" });
        res.json(rows[0]);
    } catch (err) {
        console.error("Random fact error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
