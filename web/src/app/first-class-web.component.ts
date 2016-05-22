import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs/Rx';
import { addParticipant, updateParticipant, deleteParticipant, selectParticipant } from './shared';

import { IAppState, IParticipant } from './shared';

@Component({
  moduleId: module.id,
  selector: 'first-class-web-app',
  templateUrl: 'first-class-web.component.html',
  styleUrls: ['first-class-web.component.css']
})
export class FirstClassWebAppComponent implements OnInit {
  title = 'first-class-web works!';
  participants;
  selectedParticipant;
  newParticipant:IParticipant;
  createParticipant$ = new Subject();
  selectParticipant$ = new Subject();
  deleteParticipant$ = new Subject();
  
  constructor(public store: Store<IAppState>) {}
  
  ngOnInit () {
    this.newParticipant = {id: '', firstName: '', lastName: '', level: '', unit: undefined};
    this.participants = this.store.select('participants');
    this.selectedParticipant = this.store.select('selectedParticipant');
    
    this.createParticipant$.subscribe((p:IParticipant) => this.store.dispatch(addParticipant(p)));
    this.selectParticipant$.subscribe((p:IParticipant) => this.store.dispatch(selectParticipant(p)));
    this.deleteParticipant$.subscribe((p:IParticipant) => this.store.dispatch(deleteParticipant(p)));
  }
}
