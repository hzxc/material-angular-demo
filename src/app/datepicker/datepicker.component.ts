import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatInput, MatDatepickerToggle } from '@angular/material';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @ViewChildren(MatInput) matInputs: QueryList<MatInput>;
  @ViewChild(MatInput) matInput: MatInput;

  disabledState = false;
  dp1Value: moment.Moment;
  private dpGroup: FormGroup;
  result: {
    dp1Value: moment.Moment,
    dp2Value: moment.Moment,
    dp3Value: moment.Moment,
  } = <any>[];
  constructor(
    fb: FormBuilder
  ) {
    this.dpGroup = fb.group({
      dp1Value: []
    });
  }
  change() {
    // this.matInputs.forEach(element => {
    //   element.value = moment().startOf('day');
    // });
    this.matInputs.last.value = moment().startOf('day');

    this.matInput.value = moment().startOf('day');
    this.matInput.readonly = !this.matInput.readonly;
    this.disabledState = !this.disabledState;
    console.log(this.dpGroup.controls['dp1Value'].value);
  }

  ngOnInit() {

  }

}
