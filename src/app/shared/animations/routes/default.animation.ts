import { transition, style, animate } from '@angular/animations';

export const defaultAnimations = transition('* <=> *', [
  style({
    opacity: 0
    // transform: 'translateY(-20px)'
  }),
  animate(
    '600ms 200ms ease-in-out',
    style({
      opacity: 1
      // transform: 'translateY(0px)'
    })
  )
]);
