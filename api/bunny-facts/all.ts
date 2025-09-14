import { sql } from "../_db.js";

export async function GET() {
    try {
        const rows = await sql`
            SELECT id, fact
            FROM bunny_facts
            ORDER BY id
        `;
        if (rows.length === 0) {
            return new Response(JSON.stringify({ message: "No facts yet" }), { status: 404 });
        }
        return Response.json(rows);
    } catch (e: any) {
        console.error("random error:", e);
        return new Response(JSON.stringify({ message: e.message }), { status: 500 });
    }
}