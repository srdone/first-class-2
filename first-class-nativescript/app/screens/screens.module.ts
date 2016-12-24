import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import {
  HomeComponent,
  ScoutListComponent,
  AddScoutComponent,
  ScoutComponent
} from '.';

const COMPONENTS = [
  HomeComponent,
  ScoutListComponent,
  AddScoutComponent,
  ScoutComponent
];

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: ScoutListComponent },
      { path: 'scout/:id', component: ScoutComponent }
    ]
  },
  {
    path: 'add-scout',
    component: AddScoutComponent
  }
]

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS,
    NativeScriptModule,
    NativeScriptRouterModule
  ]
})
export class ScreensModule {}