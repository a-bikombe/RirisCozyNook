import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
    private key = 'favoriteFactIds';
    private set = this.load();

    private load(): Set<number> {
        try {
            const raw = localStorage.getItem(this.key);
            const arr = raw ? JSON.parse(raw) as unknown[] : [];
            return new Set(
                Array.isArray(arr) ? arr.map(Number).filter(Number.isFinite) : []
            );
        } catch {
            return new Set<number>();
        }
    }

    private persist() {
        localStorage.setItem(this.key, JSON.stringify([...this.set]));
    }

    toggle(id: number | string | null | undefined) {
        const num = Number(id);
        if (!Number.isFinite(num)) return;
        this.set.has(num) ? this.set.delete(num) : this.set.add(num);
        this.persist();
    }

    isFavorited(id: number | string | null | undefined): boolean {
        const num = Number(id);
        return Number.isFinite(num) && this.set.has(num);
    }

    clear() {
        this.set.clear();
        this.persist();
    }
}