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
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import * as fromStore from '../../store';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [fromAnimations.singleAnimation]
})
export class WorkComponent implements OnInit {
  public work$: Observable<fromSharedModels.Work>;
  public nextProject$: Observable<fromSharedModels.Work>;
  private isWorkLoaded = false;
  @ViewChild('overlay', { static: false }) overlay: ElementRef;
  @ViewChild('work', { static: false }) work: ElementRef;

  constructor(
    public store: Store<fromModels.WorksState>,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef
  ) {}

  ngOnInit() {
    let currentProject$ = this.store.pipe(
      select(fromRootStore.getRouterStateParamsSlug)
    );
    currentProject$.pipe(map((slug) => this.updateData(slug))).subscribe();
    this.isWorkLoaded = true;
  }

  private updateData(slug: string) {
    this.work$ = this.store.pipe(select(fromStore.getWorkBySlug(slug)));
    this.nextProject$ = this.store.pipe(
      select(fromStore.getNextProjectSlug(slug))
    );
    this.handleEnterAnimation();
  }

  public handleCtaClicked(e: any) {
    let urlTarget = e.target.dataset.link;
    this.animateOverlay(urlTarget);
  }

  public animateOverlay(url: string) {
    this.renderer.setStyle(
      this.overlay.nativeElement,
      'transform',
      'translateX(0%)'
    );
    setTimeout(() => {
      this.router.navigate([url]);
    }, 500); // animation duration of the overlay
  }

  private handleEnterAnimation() {
    // @todo refacto & remove set time out when dom is ready
    if (this.isWorkLoaded) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        this.renderer.setStyle(
          this.overlay.nativeElement,
          'transform',
          'translateX(100%)'
        );
        this.resetOverlayAnimation();
      }, 500);
    }
  }

  private resetOverlayAnimation() {
    // @todo REFACTO DOUBLE SETTIMEOUT !!
    setTimeout(() => {
      this.renderer.setStyle(this.overlay.nativeElement, 'transition', 'none');
      this.renderer.setStyle(
        this.overlay.nativeElement,
        'transform',
        'translateX(-100%)'
      );
      setTimeout(() => {
        this.renderer.removeStyle(this.overlay.nativeElement, 'transition');
      }, 200);
    }, 500);
  }
}
