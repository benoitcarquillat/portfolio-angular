import { ElementRef } from '@angular/core';
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

// var banner = document.getElementById('animated-image');
// let bannerPosition = banner.getBoundingClientRect();
// console.log(bannerPosition);

export const SingleWorkAnimations = transition('HomePage => SingleWork', [
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
    query(':enter', [animate('1ms 1200ms ease-out', style({ opacity: 1 }))], {
      optional: true
    }),
    query(':leave',
      [
        group([
          query(
            '.projects-visual__image-wrapper img',
            [
              style({}),
              animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style({}))
            ],
            { optional: true }
          ),
          query(
            '.projects-visual__title',
            animate(
              '700ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ transform: 'translateY(105%)' })
            )
          ),
          query('.project-counter', [
            style({ opacity: 1, transform: 'translateY(0px)' }),
            animate(
              '700ms 100ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 0, transform: 'translateY(40px)' })
            )
          ]),
          query('.projects-details', [
            style({ opacity: 1, transform: 'translateY(0px)' }),
            animate(
              '700ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 0, transform: 'translateY(100%)' })
            )
          ]),
          query('.works__footer-content', [
            style({ opacity: 1 }),
            animate(
              '300ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 0 })
            )
          ])
        ]),
        style({ opacity: 1 }),
        animate('0.5s ease-in-out', style({ opacity: 0 }))
      ],
      { optional: true }
    )
  ])
]);
