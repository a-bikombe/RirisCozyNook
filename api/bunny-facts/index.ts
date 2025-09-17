import { sql } from "../_lib/db.js";

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        res.status(200).json({ fact: "Bunnies can't puke 🐇" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong with bunny facts!" });
    }
}

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