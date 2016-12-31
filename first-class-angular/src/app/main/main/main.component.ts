import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../core/reducers';
import { Scout } from '../../core/models';
import * as scout from '../../core/actions/scout';

@Component({
  selector: 'fcs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private store: Store<Scout>) { }

  ngOnInit() {
    //testing dispatching an action
    this.store.dispatch(new scout.CreateScoutAction({id: 'test', name: {first: 'Stephen', last: 'Done'}}));
  }

}
