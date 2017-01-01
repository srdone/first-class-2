import { Routes } from '@angular/router';

import { MainComponent } from './main';
import { ScoutListComponent } from './scout-list';
import { ScoutDetailComponent } from './scout-detail';
import { AddScoutComponent } from './add-scout';

import { CanDeactivateGuard } from './guards';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'scout-list'},
      {path: 'scout-list', component: ScoutListComponent},
      {path: 'scout/:id', component: ScoutDetailComponent},
      {path: 'add-scout', component: AddScoutComponent, canDeactivate: [CanDeactivateGuard]}
    ]
  }
]