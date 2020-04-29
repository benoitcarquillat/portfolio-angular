import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef
} from '@angular/core';

import * as fromSharedModels from '@shared/models';
import * as fromModels from '../../models';
import { environment } from '@environments/environment';
import * as fromRootStore from '@root/store';
import * as fromAnimations from '../../animations';

import { Observable, of } from 'rxjs';
import * as fromStore from '../../store';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [fromAnimations.textAnimation, fromAnimations.workAnimation]
})
export class WorkComponent implements OnInit {
  public work$: Observable<fromSharedModels.Work>;
  public nextProject$: Observable<fromSharedModels.Work>;
  public api = environment.dockerApi;
  @ViewChild('overlay', { static: false }) overlay: ElementRef;

  constructor(
    public store: Store<fromModels.WorksState>,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    let currentProject$ = this.store.pipe(
      select(fromRootStore.getRouterStateParamsSlug)
    );
    currentProject$.pipe(map((slug) => this.updateData(slug))).subscribe();
  }

  private updateData(slug: string) {
    this.work$ = this.store.pipe(select(fromStore.getWorkBySlug(slug)));
    this.nextProject$ = this.store.pipe(
      select(fromStore.getNextProjectSlug(slug))
    );
  }

  public handleCtaClicked(e: any) {
    let urlTarget = e.target.dataset.link;
    this.animateOverlay();
  }

  public animateOverlay() {
    this.renderer.setStyle(
      this.overlay.nativeElement,
      'transform',
      'translateX(0%)'
    );
    this.store.dispatch(new fromRootStore.Go({ path: ['/about'] }));

    setTimeout(() => {
      this.renderer.setStyle(
        this.overlay.nativeElement,
        'transform',
        'translateX(100%)'
      );
    }, 500);
  }
}
