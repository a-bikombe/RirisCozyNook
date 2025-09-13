import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono()
app.get('/', (c) => c.json({ ok: true, where: 'ping' }))

export const config = { runtime: 'nodejs' }
export default handle(app)