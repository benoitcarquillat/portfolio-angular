import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  state
} from '@angular/animations';

export const counterAnimation = trigger('counterAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-10px)'
    }),
    animate(
      '400ms 700ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({
        opacity: 1,
        transform: 'translateY(0)'
      })
    )
  ])

  // ********* Not Working because of the ngIf in parent ************

  // transition(':leave', [
  //   style({
  //     transform: 'translateY(0px)',
  //     position: 'absolute',
  //     left: 0,
  //     right: 0,
  //     top: 0
  //   }),
  //   animate(
  //     '300ms ease-in',
  //     style({
  //       transform: 'translateY(20px)',
  //       opacity: 0
  //     })
  //   )
  // ])
]);
