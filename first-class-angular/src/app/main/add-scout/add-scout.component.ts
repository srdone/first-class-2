import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as uuid from 'node-uuid';

import { Scout } from '../../core/models';
import * as fromRoot from '../../core/reducers';
import * as scout from '../../core/actions/scout';

@Component({
  selector: 'fcs-add-scout',
  templateUrl: './add-scout.component.html',
  styleUrls: ['./add-scout.component.css']
})
export class AddScoutComponent implements OnInit {
  newScout: FormGroup;

  constructor(private store: Store<fromRoot.State>, private router: Router) { }

  ngOnInit() {
    this.newScout = new FormGroup({
      name: new FormGroup({
        first: new FormControl('', [Validators.required]),
        last: new FormControl('', [Validators.required])
      })
    })
  }

  onSubmit({value, valid}: { value: Scout, valid: boolean}) {
    value.id = uuid.v4();
    if (valid) {
      this.store.dispatch(new scout.CreateScoutAction(value));
      this.router.navigate(['scout-list']);
    }
  }

  goBack() {
    this.router.navigate(['scout-list']);
  }

}
