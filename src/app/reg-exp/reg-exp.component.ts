import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-exp',
  templateUrl: './reg-exp.component.html',
  styleUrls: ['./reg-exp.component.scss']
})
export class RegExpComponent implements OnInit {

  private msg: string;
  constructor() { }

  ngOnInit() {
  }

  test() {
    const re = /apples/gi;
    // const re = /\d/i;
    const str = 'Apples are round, and apples are juicy.';
    if (str.search(re) === -1) {
      this.msg = 'Does not contain Apples';
    } else {
      this.msg = 'Contains Apples';
    }
    console.log(str.match(re));
  }

  otherTest() {
    const value = undefined;
    const value1 = null;
    console.log(value ? true : false);
    if (value) {
      console.log(true);
    } else {
      console.log(false);
    }

    console.log(value1 ? true : false);
    if (value1) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
