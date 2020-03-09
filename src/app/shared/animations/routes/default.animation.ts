import { transition, style, animate, query, group } from '@angular/animations';

export const defaultAnimations = transition('* <=> *', [
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ],
    { optional: true }
  ),
  query(':enter', [style({ opacity: 0 })], { optional: true }),
  group([
    query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))], {
      optional: true
    }),
    query(':enter', [animate('500ms 200ms ease-out', style({ opacity: 1 }))], {
      optional: true
    })
  ])
]);
