import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  languages = [
    {
      'name': 'de',
      'displayName': 'Deutsch',
      'icon': 'flag-icon flag-icon-de',
      'isDefault': false,
      'isDisabled': false,
      'isRightToLeft': false
    },
    {
      'name': 'en',
      'displayName': 'English',
      'icon': 'flag-icon flag-icon-gb',
      'isDefault': false,
      'isDisabled': false,
      'isRightToLeft': false
    },
    {
      'name': 'es-MX',
      'displayName': 'Español (México)',
      'icon': 'flag-icon flag-icon-mx',
      'isDefault': false,
      'isDisabled': false,
      'isRightToLeft': false
    },
    {
      'name': 'es',
      'displayName': 'Español (Spanish)',
      'icon': 'flag-icon flag-icon-es',
      'isDefault': false,
      'isDisabled': false,
      'isRightToLeft': false
    },
    {
      'name': 'fr',
      'displayName': 'Français',
      'icon': 'flag-icon flag-icon-fr',
      'isDefault': false,
      'isDisabled': false,
      'isRightToLeft': false
    },
    {
      'name': 'it',
      'displayName': 'Italiano',
      'icon': 'flag-icon flag-icon-it',
      'isDefault': false,
      'isDisabled': false,
      'isRightToLeft': false
    },
    {
      'name': 'pt-BR',
      'displayName': 'Português (Brasil)',
      'icon': 'flag-icon flag-icon-br',
      'isDefault': false,
      'isDisabled': false,
      'isRightToLeft': false
    },
    {
      'name': 'ru',
      'displayName': 'Pусский',
      'icon': 'flag-icon flag-icon-ru',
      'isDefault': false,
      'isDisabled': false,
      'isRightToLeft': false
    },
    {
      'name': 'tr',
      'displayName': 'Türkçe',
      'icon': 'flag-icon flag-icon-tr',
      'isDefault': false,
      'isDisabled': false,
      'isRightToLeft': false
    },
    {
      'name': 'ar',
      'displayName': 'العربية',
      'icon': 'flag-icon flag-icon-sa',
      'isDefault': false,
      'isDisabled': false,
      'isRightToLeft': true
    },
    {
      'name': 'zh-CN',
      'displayName': '简体中文',
      'icon': 'flag-icon flag-icon-cn',
      'isDefault': true,
      'isDisabled': false,
      'isRightToLeft': false
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
