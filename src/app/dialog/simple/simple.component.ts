import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  private name;
  constructor(
    public dialogRef: MatDialogRef<SimpleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.name = data.name;
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
  ngOnInit() {
  }

}
