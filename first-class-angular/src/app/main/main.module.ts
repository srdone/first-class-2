import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AddScoutComponent } from './add-scout';
import { MainComponent } from './main';
import { ScoutDetailComponent } from './scout-detail';
import { ScoutListComponent } from './scout-list';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'scout-list'},
      {path: 'scout-list', component: ScoutListComponent},
      {path: 'add-scout', component: AddScoutComponent},
      {path: 'scout/:id', component: ScoutDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AddScoutComponent,
    MainComponent,
    ScoutDetailComponent,
    ScoutListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {}