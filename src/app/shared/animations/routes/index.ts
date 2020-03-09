import { trigger } from '@angular/animations';

import { SingleWorkAnimations } from './single-work.animation';
import { defaultAnimations } from './default.animation';

export const RouteAnimations = trigger('routeAnimations', [
  SingleWorkAnimations,
  defaultAnimations
]);
