import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurable-progress-spinner',
  templateUrl: './configurable-progress-spinner.component.html',
  styleUrls: ['./configurable-progress-spinner.component.scss']
})
export class ConfigurableProgressSpinnerComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  constructor() { }

  ngOnInit() {
  }

  valueChange(value) {
    console.log(value);
  }

  progressChange(progress) {
    console.log(progress);
  }

}
