import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromRoot from '../../core/reducers';
import * as scout from '../../core/actions/scout';
import { Scout } from '../../core/models';
import { ScoutActionCreator } from '../../core/actions';

@Component({
  selector: 'fcs-scout-list',
  templateUrl: './scout-list.component.html',
  styleUrls: ['./scout-list.component.css']
})
export class ScoutListComponent implements OnInit, OnDestroy {
  scouts$: Observable<Scout[]>;
  selectedScoutId: string;
  selectedScoutSubscription: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private scoutActionCreator: ScoutActionCreator
  ) { }

  ngOnInit() {
    this.scouts$ = this.store.select(fromRoot.getAllScouts);

    this.selectedScoutSubscription = this.store.select(fromRoot.getSelectedScoutId).subscribe(
      id => this.selectedScoutId = id
    );
  }

  ngOnDestroy() {
    this.selectedScoutSubscription.unsubscribe();
  }

  deleteScout(id: string) {
    this.store.dispatch(this.scoutActionCreator.deleteScout(id));
  }

  selectScout(id: string) {
    this.store.dispatch(this.scoutActionCreator.selectScout(id));
  }

}
