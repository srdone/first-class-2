import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found';

import { MainComponent } from './main';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', component: MainComponent},
  {path: '**', component: PageNotFoundComponent}
]