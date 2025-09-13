import { Hono } from 'hono'

const router = new Hono()

router.get('/', (c) =>
    c.json({
        ok: true,
        service: 'rcn-api',
        uptime: process.uptime(),
    })
)

export default router
