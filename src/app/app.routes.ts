import { Routes } from '@angular/router';
import { AboutMePage } from '@pages/about-me/about-me.page';
import { PlaylistPage } from '@pages/playlist/playlist.page';
import { CrewPage } from '@pages/crew/crew.page';
import { FavoritesPage } from '@pages/favorites/favorites.page';
import { HomePage } from '@pages/home/home.page';
import { NotFoundPage } from '@pages/not-found/not-found.page';
import { BunnyFactsPage } from '@pages/bunny-facts/bunny-facts.page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: '404', component: NotFoundPage },
    { path: 'about-me', component: AboutMePage },
    { path: 'crew', component: CrewPage },
    { path: 'favorites', component: FavoritesPage },
    { path: 'playlist', component: PlaylistPage },
    { path: 'bunny-facts', component: BunnyFactsPage },
    { path: '**', component: NotFoundPage },
];