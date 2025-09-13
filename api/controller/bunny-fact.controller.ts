import { Hono } from 'hono'
import { BunnyFactService } from '../service/bunny-fact.service'

const router = new Hono()
const service = new BunnyFactService()

router.get('/', async (c) => {
    const facts = await service.listFacts()
    return c.json({ facts })
})

router.get('/random', async (c) => {
    const fact = await service.randomFact()
    return c.json({ fact })
})

export default router