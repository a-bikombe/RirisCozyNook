import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CozyCornerComponent } from './components/cozy-corner/cozy-corner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'cozy-corner', component: CozyCornerComponent },
    { path: '**', component: PageNotFoundComponent },
];
