import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../core/reducers';
import * as scout from '../../core/actions/scout';
import { Scout } from '../../core/models'

@Component({
  selector: 'fcs-scout-list',
  templateUrl: './scout-list.component.html',
  styleUrls: ['./scout-list.component.css']
})
export class ScoutListComponent implements OnInit {
  scouts$: Observable<Scout[]>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.scouts$ = this.store.select(fromRoot.getAllScouts);
  }

  deleteScout(id: string) {
    this.store.dispatch(new scout.DeleteScoutAction(id));
  }

}
