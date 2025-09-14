import { sql } from "../_db";

export const runtime = "edge";

export async function GET(): Promise<Response> {
    try {
        const rows = await sql`
            SELECT id, fact
            FROM bunny_facts
            ORDER BY RANDOM()
            LIMIT 1
    `;
        if (rows.length === 0) {
            return new Response(JSON.stringify({ message: "No facts yet" }), { status: 404 });
        }
        return Response.json(rows[0]);
    } catch (e: any) {
        return new Response(JSON.stringify({ message: e.message }), { status: 500 });
    }
}