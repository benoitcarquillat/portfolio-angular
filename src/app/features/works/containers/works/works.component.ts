import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import * as fromSharedModels from '@shared/models';
import * as fromModels from '../../models';
import * as fromAnimations from '../../animations';

import * as fromStore from '../../store';
import * as fromRootStore from '@root/store';
import { Store, select } from '@ngrx/store';
import { merge, fromEvent, Observable } from 'rxjs';
import { filter, tap, debounceTime, delay, take } from 'rxjs/operators';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: [fromAnimations.textAnimation, fromAnimations.workAnimation]
})
export class WorksComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('prev', { static: false }) prev: ElementRef;
  @ViewChild('next', { static: false }) next: ElementRef;
  public works$: Observable<fromSharedModels.Work[]>;
  public routeAnimation$: Observable<string>;
  public index = 0;
  public worksLength: number;
  public isAnimated = false;

  constructor(
    public store: Store<fromModels.WorksState>,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.renderer.addClass(document.body, 'locked-for-slider');
  }

  ngOnInit() {
    this.store.dispatch(fromStore.LoadWorks());
    this.works$ = this.store.pipe(select(fromStore.getAllWorksList));
    this.routeAnimation$ = this.store.pipe(
      select(fromRootStore.getRouterAnimationName('animation'))
    );
  }

  ngAfterViewInit() {
    const keyUp$ = fromEvent(document, 'keyup');
    const prev$ = fromEvent(this.prev.nativeElement, 'click');
    const next$ = fromEvent(this.next.nativeElement, 'click');

    const ArrowLeft$ = keyUp$.pipe(
      filter((e: KeyboardEvent) => e.keyCode === 37)
    );
    const ArrowRight$ = keyUp$.pipe(
      filter((e: KeyboardEvent) => e.keyCode === 39)
    );

    const clickKeyPrev$ = merge(ArrowLeft$, prev$);
    const clickKeyNext$ = merge(ArrowRight$, next$);

    clickKeyPrev$
      .pipe(
        debounceTime(200),
        tap(_ => this.previousProject())
      )
      .subscribe();

    clickKeyNext$
      .pipe(
        debounceTime(200),
        tap(_ => this.nextProject())
      )
      .subscribe();
    this.works$.subscribe(works => (this.worksLength = works.length));
  }

  public isCurrentProject(projectIndex: number): boolean {
    return this.index === projectIndex ? true : false;
  }

  public nextProject(): void {
    this.toogleAnimation();
    if(this.index >= this.worksLength - 1) {
      this.index = 0
    } else {
      this.index++;
    }
  }

  public previousProject(): void {
    this.toogleAnimation();
    if(this.index <= 0) {
      this.index = this.worksLength - 1;
    } else {
      this.index--;
    }
  }

  private toogleAnimation() {
    this.isAnimated = this.isAnimated = true;
    setTimeout(() => (this.isAnimated = false), 500);
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'locked-for-slider');
  }
}
