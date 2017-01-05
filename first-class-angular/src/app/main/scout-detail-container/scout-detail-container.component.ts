import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as fromRoot from '../../core/reducers';
import { Scout } from '../../core/models';

@Component({
  templateUrl: './scout-detail-container.component.html'
})
export class ScoutDetailContainerComponent implements OnInit {
  title = 'Scout detail container works!';
  scout$: Observable<Scout>;

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.scout$ = this.route.params
      .map(params => params['id'])
      .switchMap(id => this.store.select(fromRoot.getScout(id)));
  }

}