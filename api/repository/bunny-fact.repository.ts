import { prisma } from '../mapper/prisma'
import { toDTO, type BunnyFactDTO } from '../mapper/bunny-fact.mapper'

export class BunnyFactRepository {
    async findAll(): Promise<BunnyFactDTO[]> {
        const rows = await prisma.bunny_facts.findMany({ orderBy: { id: 'asc' } })
        return rows.map(toDTO)
    }

    async findRandom(): Promise<BunnyFactDTO | null> {
        const count = await prisma.bunny_facts.count()
        if (count === 0) return null
        const skip = Math.floor(Math.random() * count)
        const [row] = await prisma.bunny_facts.findMany({ take: 1, skip })
        return row ? toDTO(row) : null
    }
}