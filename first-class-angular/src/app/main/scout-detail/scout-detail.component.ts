import { Component, OnInit, Input } from '@angular/core';

import { Scout } from '../../core/models/scout';

@Component({
  selector: 'fcs-scout-detail',
  templateUrl: './scout-detail.component.html',
  styleUrls: ['./scout-detail.component.css']
})
export class ScoutDetailComponent implements OnInit {
  @Input('scout') scout: Scout;

  constructor() { }

  ngOnInit() {
  }

}
