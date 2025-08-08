import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CozyCornerComponent } from './pages/cozy-corner/cozy-corner.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PageNotFoundComponent } from './pages/errors/404/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'cozy-corner', /* component: CozyCornerComponent,  */redirectTo: '/404' },
    { path: '**', component: PageNotFoundComponent },
];
