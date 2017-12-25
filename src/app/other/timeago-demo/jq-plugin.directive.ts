import { Directive, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { AfterViewChecked, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[jq-plugin]'
})
export class JqPluginDirective implements OnInit, OnChanges, AfterViewInit, AfterViewChecked {




  constructor(
    private _element: ElementRef
  ) {

  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

  ngAfterViewChecked() {

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewChecked');
    const $element = $(this._element.nativeElement);
    const pluginName = $element.attr('jq-plugin');
    const options = $element.attr('jq-options');
    if (!options) {
      $element.timeago();
      // $element[pluginName]();
    } else {
      // tslint:disable-next-line:no-eval
      $element[pluginName](eval('(' + options + ')'));
    }
  }
}
