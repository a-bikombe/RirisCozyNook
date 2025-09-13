import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import { serve } from '@hono/node-server'

import bunnyFactController from './controller/bunny-fact.controller'
import healthController from './controller/health.controller'

const app = new Hono()

// middleware
app.use('*', logger())
app.use('*', cors({ origin: ['http://localhost:4200', 'https://riris-cozy-nook.vercel.app'] }))
app.use('*', prettyJSON())

// routes
app.route('/bunny-facts', bunnyFactController)
app.route('/health', healthController)

// not found
app.notFound((c) => c.json({ error: 'Not found' }, 404))

// export for Vercel/Edge
export default app

// local server (ignored by Vercel)
if (process.env['NODE_ENV'] !== 'production') {
    const port = Number(process.env['PORT']) || 8080
    serve({ fetch: app.fetch, port }, () =>
        console.log(`🚀 API running at http://localhost:${port}`)
    )
}
