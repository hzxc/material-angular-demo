import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
@Component({
  selector: 'app-set-display-value',
  templateUrl: './set-display-value.component.html',
  styleUrls: ['./set-display-value.component.scss']
})
export class SetDisplayValueComponent implements OnInit {


  private displayGroup: FormGroup;

  options = [
    new User('Mary', 'Mary1'),
    new User('Shelley', 'Shelley1'),
    new User('Igor', 'Igor1')
  ];

  filteredOptions: Observable<User[]>;

  constructor(fb: FormBuilder) {
    this.displayGroup = fb.group({
      username: [],
    }
    );
  }

  ngOnInit() {
    // this.filteredOptions = Observable.from(this.options).map(_ => _);
    this.filteredOptions = this.displayGroup.controls['username'].valueChanges
      .startWith(null)
      .map(user => user && typeof user === 'object' ? user.name : user)
      .map(name => name ? this.filter(name) : this.options.slice());

    console.log(this.filteredOptions);
  }

  filter(name: string): User[] {
    return this.options.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(user: User): string {
    return user ? ' <span class="flag-icon flag-icon-cn"></span>' + user.name : null;
  }

}

export class User {
  constructor(public name: string, public text: string) { }
}
