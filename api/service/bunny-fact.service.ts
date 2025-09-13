import { BunnyFactRepository } from '../repository/bunny-fact.repository'
import type { BunnyFactDTO } from '../mapper/bunny-fact.mapper'

export class BunnyFactService {
    private repo: BunnyFactRepository

    constructor() {
        this.repo = new BunnyFactRepository()
    }

    listFacts(): Promise<BunnyFactDTO[]> {
        return this.repo.findAll()
    }

    async randomFact(): Promise<BunnyFactDTO> {
        const fact = await this.repo.findRandom()
        if (!fact) throw new Error('No facts available')
        return fact
    }
}