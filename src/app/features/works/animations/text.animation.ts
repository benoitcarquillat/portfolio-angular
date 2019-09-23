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

export const textAnimation = trigger('textAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-40px)'
    }),
    animate(
      '800ms 300ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({
        opacity: 1,
        transform: 'translateY(0)'
      })
    )
  ]),
  transition(':leave', [
    style({
      transform: 'translateY(0px)',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    }),
    animate(
      '300ms ease-in',
      style({
        transform: 'translateY(40px)',
        opacity: 0
      })
    )
  ])
]);
