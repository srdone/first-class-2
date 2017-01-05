import { Routes } from '@angular/router';

import { MainComponent } from './main';
import { ScoutListComponent } from './scout-list';
import { ScoutDetailContainerComponent } from './scout-detail-container';
import { AddScoutComponent } from './add-scout';

import { CanDeactivateGuard } from './guards';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'scout-list'},
      {path: 'scout-list', component: ScoutListComponent},
      {path: 'scout/:id', component: ScoutDetailContainerComponent},
      {path: 'add-scout', component: AddScoutComponent, canDeactivate: [CanDeactivateGuard]}
    ]
  }
]