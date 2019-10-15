import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {
  @ViewChild('button', { static: false }) button: ElementRef;
  constructor() {}

  ngOnInit() {
    // const source$ = fromEvent(document, 'click');
    // source$.subscribe(x => console.log(x));
  }

  ngAfterViewInit() {
    const buttonClicked$ = fromEvent(this.button.nativeElement, 'click');
    buttonClicked$.pipe(debounceTime(500)).subscribe(x => console.log(x));
  }
}
