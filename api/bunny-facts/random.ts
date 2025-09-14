import { sql } from "../_db.js";

export async function GET() {
    try {
        const rows = await sql`
            select id, fact
            from bunny_facts
            order by random()
            limit 1
    `;
        if (rows.length === 0) {
            return new Response(JSON.stringify({ message: "No facts yet" }), { status: 404 });
        }
        return Response.json(rows[0]);
    } catch (e: any) {
        console.error("random error:", e);
        return new Response(JSON.stringify({ message: e.message }), { status: 500 });
    }
}