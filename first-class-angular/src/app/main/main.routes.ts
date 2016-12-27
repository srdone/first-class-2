import { Routes } from '@angular/router';

import { MainComponent } from './main';
import { ScoutListComponent } from './scout-list';
import { ScoutDetailComponent } from './scout-detail';
import { AddScoutComponent } from './add-scout';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'scout-list'},
      {path: 'scout-list', component: ScoutListComponent},
      {path: 'scout/:id', component: ScoutDetailComponent},
      {path: 'add-scout', component: AddScoutComponent}
    ]
  }
]