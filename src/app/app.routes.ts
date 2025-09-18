import { Routes } from '@angular/router';
import { AboutMePage } from '@pages/about-me/about-me.page';
import { CozyCornerPage } from '@pages/cozy-corner/cozy-corner.page';
import { FavoritesPage } from '@pages/favorites/favorites.page';
import { HomePage } from '@pages/home/home.page';
import { PageNotFoundPage } from '@pages/page-not-found/page-not-found.page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: '404', component: PageNotFoundPage },
    { path: 'about-me', component: AboutMePage },
    { path: 'favorites', component: FavoritesPage },
    { path: 'cozy-corner', component: CozyCornerPage },
    { path: '**', component: PageNotFoundPage },
];
