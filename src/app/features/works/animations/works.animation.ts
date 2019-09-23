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

export const workAnimation = trigger('workAnimation', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(
      '1.5s cubic-bezier(0.35, 0, 0.25, 1)',
      style({
        opacity: 1
      })
    )
  ]),
  transition(':leave', [
    style({
      // transform: 'translateY(0)',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    }),
    animate(
      '800ms ease-in',
      style({
        // transform: 'translateY(100%)',
        opacity: 0
      })
    )
  ])
]);
