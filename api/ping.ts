export default function handler(req: Request) {
    return new Response(JSON.stringify({ ok: true, where: 'ping' }), {
        headers: { 'Content-Type': 'application/json' },
    })
}