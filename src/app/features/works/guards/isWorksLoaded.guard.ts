import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../store';
import { tap, take, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class isWorksLoaded implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate() {
    let works$ = this.store.pipe(select(fromStore.getAllWorksList));
    works$
      .pipe(
        filter(works => works.length === 0),
        tap(_ => this.store.dispatch(fromStore.LoadWorks())),
        take(1)
      )
      .subscribe();
    return true;
  }
}
