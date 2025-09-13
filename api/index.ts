import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import { handle } from 'hono/vercel'   // <-- Adapter for Vercel Node functions

import bunnyFactController from './controller/bunny-fact.controller'
import healthController from './controller/health.controller'

const app = new Hono()

app.use('*', logger())
app.use('*', cors({ origin: ['http://localhost:4200', 'https://riris-cozy-nook.vercel.app'] }))
app.use('*', prettyJSON())

app.route('/bunny-facts', bunnyFactController)
app.route('/health', healthController)

app.notFound((c) => c.json({ error: 'Not found' }, 404))

// Tell Vercel to run this as a Node function
export const config = {
    runtime: 'nodejs',      // (or 'nodejs20.x')
}

// Export a Vercel-compatible handler
export default handle(app)