import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import * as fromSharedModels from '@shared/models';
import * as fromModels from '../../models';
import * as fromAnimations from '../../animations';

import * as fromStore from '../../store';
import { Store, select } from '@ngrx/store';
import { merge, fromEvent, Observable } from 'rxjs';
import { filter, tap, debounceTime, delay, take } from 'rxjs/operators';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: [fromAnimations.textAnimation, fromAnimations.workAnimation]
})
export class WorksComponent implements OnInit, AfterViewInit {
  @ViewChild('prev', { static: false }) prev: ElementRef;
  @ViewChild('next', { static: false }) next: ElementRef;
  public works$: Observable<fromSharedModels.Work[]>;
  public index = 0;
  public worksLength: number;
  public isAnimated = false;

  constructor(
    public store: Store<fromModels.WorksState>,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.store.dispatch(fromStore.LoadWorks());
    this.works$ = this.store.pipe(select(fromStore.getAllWorksList));
    // this.toogleAnimation();
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
    this.index <= 0 ? (this.index = this.worksLength - 1) : this.index--;
  }

  public previousProject(): void {
    this.toogleAnimation();
    this.index <= 0 ? (this.index = this.worksLength - 1) : this.index--;
  }

  private toogleAnimation() {
    this.isAnimated = this.isAnimated = true;
    setTimeout(() => (this.isAnimated = false), 500);
  }
}
