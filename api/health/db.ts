import { sql } from "../_db";
export const runtime = "edge";

export async function GET() {
    try {
        const now = await sql`select now()`;
        const table = await sql`select to_regclass('public.bunny_facts') as t`;
        return Response.json({ ok: true, now: now[0]["now"], has_table: !!table[0]["t"] });
    } catch (e: any) {
        console.error("health/db error:", e);
        return new Response(JSON.stringify({ ok: false, error: e.message }), { status: 500 });
    }
}