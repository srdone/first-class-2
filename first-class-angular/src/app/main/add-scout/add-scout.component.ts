import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as uuid from 'node-uuid';

import { Scout } from '../../core/models';
import * as fromRoot from '../../core/reducers';
import * as scout from '../../core/actions/scout';

import { CanComponentDeactivate } from '../guards';
import { DialogService } from '../../shared';

@Component({
  selector: 'fcs-add-scout',
  templateUrl: './add-scout.component.html',
  styleUrls: ['./add-scout.component.css']
})
export class AddScoutComponent implements OnInit, CanComponentDeactivate {
  newScout: FormGroup;
  saved: boolean = false;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private dialogService: DialogService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.newScout = this.formBuilder.group({
      name: this.formBuilder.group({
        first: ['', Validators.required],
        last: ['', Validators.required]
      })
    })
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.newScout || this.saved || this.newScout.pristine) {
      return true;
    }
    return this.dialogService.confirm('You have unsaved changes. Are you sure you want to navigate away?');
  }

  onSubmit({value, valid}: { value: Scout, valid: boolean}) {
    value.id = uuid.v4();
    if (valid) {
      this.store.dispatch(new scout.CreateScoutAction(value));
      this.saved = true;
      this.router.navigate(['scout-list']);
    }
  }

  goBack() {
    this.router.navigate(['scout-list']);
  }

}
