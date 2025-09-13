import type { bunny_facts } from '@prisma/client';
export type BunnyFactDTO = {
    id: number
    fact: string
}

export const toDTO = (row: bunny_facts): BunnyFactDTO => ({
    id: row.id,
    fact: row.fact,
});