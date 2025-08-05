import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            // Get all crew members
            const result = await sql`SELECT * FROM crew`;
            return res.status(200).json(result);
        }

        if (req.method === "POST") {
            const { name, relationship, description } = req.body;
            await sql`
        INSERT INTO crew (name, relationship, description)
        VALUES (${name}, ${relationship}, ${description})
        `;
            return res.status(201).json({ message: "Crew member added!" });
        }

        res.status(405).json({ error: "Method Not Allowed" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database Error" });
    }
}
