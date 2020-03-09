import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import * as fromAnimation from '../../../shared/animations/routes';

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
  animations: [fromAnimation.RouteAnimations]
})
export class AppCoreComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
