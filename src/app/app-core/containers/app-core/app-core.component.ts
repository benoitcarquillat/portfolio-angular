import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app-core.component.html',
  styleUrls: [
    '../../../../../node_modules/sanitize.css/sanitize.css',
    '../../../../../node_modules/normalize.css/normalize.css',
    '../../../../stylesheets/styles.scss',
    './app-core.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppCoreComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
