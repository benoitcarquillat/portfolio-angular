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
      query(
        ':enter',
        [
          group([
            query('.projects-visual__image-wrapper', [
              style({ opacity: 0, transform: 'translateY(-105%)' }),
              animate(
                '1000ms cubic-bezier(0.35, 0, 0.25, 1)',
                style({ opacity: 1, transform: 'translateY(0)' })
              )
            ]),
            query('.projects-visual__title', [
              style({ transform: 'translateY(-110%)' }),
              animate(
                '700ms 200ms cubic-bezier(0.35, 0, 0.25, 1)',
                style({ transform: 'translateY(0px)' })
              )
            ]),
            query('.project-counter', [
              style({ opacity: 0, transform: 'translateY(-40px)' }),
              animate(
                '500ms 500ms cubic-bezier(0.35, 0, 0.25, 1)',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            ])
          ])
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          group([
            query(
              '.projects-visual__image-wrapper',
              animate(
                '1000ms cubic-bezier(0.35, 0, 0.25, 1)',
                style({ opacity: 0, transform: 'translateY(150%)' })
              )
            ),
            query(
              '.projects-visual__title',
              animate(
                '500ms cubic-bezier(0.35, 0, 0.25, 1)',
                style({ transform: 'translateY(105%)' })
              )
            ),
            query('.project-counter', [
              style({ opacity: 1, transform: 'translateY(0px)' }),
              animate(
                '500ms cubic-bezier(0.35, 0, 0.25, 1)',
                style({ opacity: 0, transform: 'translateY(40px)' })
              )
            ])
          ])
        ],
        { optional: true }
      )
    ])
  ])
]);
