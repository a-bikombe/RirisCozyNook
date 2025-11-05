import { Routes } from '@angular/router';
import { AboutMePage } from '@pages/about-me/about-me.page';
import { PlaylistPage } from '@pages/playlist/playlist.page';
import { CrewPage } from '@pages/crew/crew.page';
import { FavoritesPage } from '@pages/favorites/favorites.page';
import { HomePage } from '@pages/home/home.page';
import { NotFoundPage } from '@pages/not-found/not-found.page';
import { BunnyFactsPage } from '@pages/bunny-facts/bunny-facts.page';
import { RoutePaths } from '@constants/routes.constants';
import { WrestlingPage } from '@pages/wrestling/wrestling.page';
import { KpopPage } from '@pages/kpop/kpop.page';

export const routes: Routes = [
    { path: RoutePaths.HOME, component: HomePage },
    { path: RoutePaths.NOT_FOUND, component: NotFoundPage },
    { path: RoutePaths.ABOUT_ME, component: AboutMePage },
    { path: RoutePaths.CREW, component: CrewPage },
    { path: RoutePaths.FAVORITES, component: FavoritesPage },
    { path: RoutePaths.PLAYLIST, component: PlaylistPage },
    { path: RoutePaths.BUNNY_FACTS, component: BunnyFactsPage },
    { path: RoutePaths.WRESTLING, component: WrestlingPage },
    { path: RoutePaths.KPOP, component: KpopPage },
    { path: '**', component: NotFoundPage },
];