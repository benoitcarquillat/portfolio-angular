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

const timeMenu = '3000ms';

export const testanime = trigger('cookieBanner', [
  transition('* => *', [
    style({
      opacity: 0,
      transform: 'translateY(100%)'
    }),

    animate(
      '800ms 100ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({
        opacity: 1,
        transform: 'translateY(0%)'
      })
    )
  ])
]);
