import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CozyCornerComponent } from './pages/cozy-corner/cozy-corner.component';
import { DreamsComponent } from './pages/dreams/dreams.component';
import { CrewComponent } from './pages/crew/crew.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'crew', component: CrewComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'cozy-corner', component: CozyCornerComponent },
    { path: 'dreams', component: DreamsComponent },
];
