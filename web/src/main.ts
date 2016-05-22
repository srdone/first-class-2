import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideStore } from '@ngrx/store';
import { enableProdMode } from '@angular/core';
import { FirstClassWebAppComponent, environment } from './app/';

import { participants, selectedParticipant } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(FirstClassWebAppComponent, [ provideStore({participants, selectedParticipant}, {participants: [], selectedParticipant: {}}) ]);
