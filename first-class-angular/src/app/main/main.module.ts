import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';

import { AddScoutComponent } from './add-scout';
import { MainComponent } from './main';
import { ScoutDetailComponent } from './scout-detail';
import { ScoutDetailContainerComponent } from './scout-detail-container';
import { ScoutListComponent } from './scout-list';

import { CanDeactivateGuard } from './guards';

import { routes } from './main.routes';

@NgModule({
  declarations: [
    AddScoutComponent,
    MainComponent,
    ScoutDetailComponent,
    ScoutDetailContainerComponent,
    ScoutListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CanDeactivateGuard
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {}