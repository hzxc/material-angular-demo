import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/last';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss']
})
export class RxjsDemoComponent implements OnInit {

  items: Array<Item> = new Array();

  constructor() {

  }

  ngOnInit() {

  }

  trigger() {


    const obj1$ = Observable.from([1, 2, 3, 4, 5]).filter(x => x > 3);
    const obj2$ = Observable.of<Item>(
      {
        isFree: null,
        value: '-1',
        displayText: '- All -',
        isSelected: false
      },
      {
        isFree: null,
        value: '',
        displayText: 'Not assigned',
        isSelected: false
      },
      {
        isFree: true,
        value: '1',
        displayText: 'Standard',
        isSelected: false
      }
    );
    const obj3$ = Observable.from<Item>(
      [
        {
          isFree: null,
          value: '-1',
          displayText: '- All -',
          isSelected: false
        },
        {
          isFree: null,
          value: '',
          displayText: 'Not assigned',
          isSelected: false
        },
        {
          isFree: true,
          value: '1',
          displayText: 'Standard',
          isSelected: false
        }
      ]
    );
    // obj1$.subscribe(val => console.log(val));
    obj2$.filter(v => v.value === '1').subscribe(val => console.log(val));
    obj3$.subscribe(val => this.items.push(val));
    console.log(this.items);
  }
}

export class Item {

  public isFree?: boolean;

  public value: string;

  public displayText: string;

  public isSelected: boolean;

  constructor(data?: Item) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  }
}
