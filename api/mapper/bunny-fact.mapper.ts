// adjust this type import if your model is BunnyFact instead of bunny_facts
import type { bunny_facts } from '../generated/prisma'

export type BunnyFactDTO = {
    id: number
    fact: string
}

export const toDTO = (row: bunny_facts): BunnyFactDTO => ({
    id: row.id,
    fact: row.fact,
})