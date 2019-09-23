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
  transition(':enter, :leave', [
    query(
      ':leave',
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
      }),
      { optional: true }
    ),
    group([
      // block executes in parallel
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('1s ease-in-out', style({ opacity: 1 }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          // query(
          //   '.projects-visual',
          //   [
          //     style({ transform: 'translateX(-100%)' }),
          //     animate(
          //       '6000ms cubic-bezier(0.35, 0, 0.25, 1)',
          //       style({ transform: 'translateX(0%)' })
          //     )
          //   ],
          //   { optional: true }
          // ),

          query(
            '.projects-visual__image-wrapper',
            animate(1000, style({ opacity: 0 }))
          ),
          query('h1', animate(4000, style({ opacity: 0 })))

          // style({ opacity: 1 }),
          // animate('5s ease-in-out', style({ opacity: 0 }))
        ],
        { optional: true }
      )
    ])
  ])
]);
