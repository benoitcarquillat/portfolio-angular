import { Component, OnInit } from '@angular/core';

import * as fromSharedModels from '@shared/models';
import * as fromAnimations from '../../animations';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: [fromAnimations.testanime]
})
export class WorksComponent implements OnInit {
  public works: Array<fromSharedModels.Work>;

  constructor() {}

  ngOnInit() {
    // this.works = [
    //   {
    //     id: 1,
    //     image: 'gagliardi/image.jpg',
    //     title: 'Gagliardi',
    //     subtitle: 'Two months in Malta',
    //     content:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    //     slug: 'gagliardi',
    //     role: fromSharedModels.Roles.DESIGNER
    //   }
    // ];
  }

  public testanime() {
    // this.works = [
    //   {
    //     id: 1,
    //     image: 'gagliardi/image.jpg',
    //     title: 'Yoozly',
    //     subtitle: 'Two months in Malta',
    //     content:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    //     slug: 'gagliardi',
    //     role: fromSharedModels.Roles.DESIGNER
    //   }
    // ];
  }
}
