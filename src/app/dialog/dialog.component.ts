import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SimpleComponent } from './simple/simple.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(SimpleComponent, {
      width: '400px',
      data: {
        name: this.name,
        animal: this.animal,
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.animal = result;
    });
  }
  ngOnInit() {
  }

}
