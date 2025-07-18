import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CozyCornerComponent } from './components/cozy-corner/cozy-corner.component';
import { DreamsComponent } from './components/dreams/dreams.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'cozy-corner', component: CozyCornerComponent },
    { path: 'dreams', component: DreamsComponent },
];
