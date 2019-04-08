import { Component, OnInit } from '@angular/core';

import * as fromModels from '../../models';
import * as fromAnimations from '../../animations';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: [fromAnimations.testanime]
})
export class WorksComponent implements OnInit {
  public works: Array<fromModels.Program>;

  constructor() {}

  ngOnInit() {
    this.works = [
      {
        id: 1,
        image: 'gagliardi/image.jpg',
        title: 'Gagliardi',
        subtitle: 'Two months in Malta',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        slug: 'gagliardi',
        role: fromModels.Roles.DESIGNER
      }
    ];
  }

  testanime() {
    this.works = [
      {
        id: 1,
        image: 'gagliardi/image.jpg',
        title: 'Yoozly',
        subtitle: 'Two months in Malta',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        slug: 'gagliardi',
        role: fromModels.Roles.DESIGNER
      }
    ];
  }
}
