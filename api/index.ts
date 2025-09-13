import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

import bunnyFactController from './controller/bunny-fact.controller'
import healthController from './controller/health.controller'

const app = new Hono()

app.use('*', logger())
app.use('*', cors())

app.route('/bunny-facts', bunnyFactController)
app.route('/health', healthController)

export const config = {
    runtime: 'nodejs',
}

export default handle(app)