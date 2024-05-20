import type { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayComponent } from './pages/play/play.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: '/',
  },
  {
    component: PlayComponent,
    path: '/play',
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
