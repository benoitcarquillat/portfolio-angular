import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { HeaderComponent } from './header.component';

storiesOf('HeaderComponent', module).add('Default', () => ({
  moduleMetadata: {
    declarations: [HeaderComponent]
  },
  template: `<app-header>
    <svg
      icon
      data-file="shipment.svg"
      aria-hidden="true"
      width="50px"
      height="34px"
      viewBox="0 0 50 34"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="#005586"
    >
      <path
        d="M40.8028455,24.8780488 C39.5833333,24.8780488 38.4247967,25.3556911 37.550813,26.2195122 C36.6768293,27.0934959 36.1890244,28.2317073 36.1890244,29.4512195 C36.1890244,30.6707317 36.6666667,31.8089431 37.550813,32.6829268 C38.4349593,33.546748 39.5833333,34.0243902 40.8028455,34.0243902 C43.3028455,34.0243902 45.3353659,31.9715447 45.3353659,29.4512195 C45.3353659,26.9308943 43.3028455,24.8780488 40.8028455,24.8780488 Z M40.8028455,31.9918699 C39.4004065,31.9918699 38.2215447,30.8333333 38.2215447,29.4512195 C38.2215447,28.0691057 39.4004065,26.9105691 40.8028455,26.9105691 C42.1849593,26.9105691 43.3028455,28.0487805 43.3028455,29.4512195 C43.3028455,30.8536585 42.1849593,31.9918699 40.8028455,31.9918699 Z M41.9817073,9.64430894 C41.7987805,9.47154472 41.554878,9.3800813 41.300813,9.3800813 L36.0873984,9.3800813 C35.5284553,9.3800813 35.0711382,9.83739837 35.0711382,10.3963415 L35.0711382,18.7296748 C35.0711382,19.2886179 35.5284553,19.745935 36.0873984,19.745935 L44.3597561,19.745935 C44.9186992,19.745935 45.3760163,19.2886179 45.3760163,18.7296748 L45.3760163,13.1504065 C45.3760163,12.8658537 45.254065,12.5914634 45.0406504,12.398374 L41.9817073,9.64430894 Z M43.3434959,17.7134146 L37.1036585,17.7134146 L37.1036585,11.402439 L40.9044715,11.402439 L43.3434959,13.597561 L43.3434959,17.7134146 Z M15.9857724,24.8780488 C14.7662602,24.8780488 13.6077236,25.3556911 12.7337398,26.2195122 C11.8597561,27.0934959 11.3719512,28.2317073 11.3719512,29.4512195 C11.3719512,30.6707317 11.8495935,31.8089431 12.7337398,32.6829268 C13.6178862,33.546748 14.7662602,34.0243902 15.9857724,34.0243902 C18.4857724,34.0243902 20.5182927,31.9715447 20.5182927,29.4512195 C20.5182927,26.9308943 18.4857724,24.8780488 15.9857724,24.8780488 Z M15.9857724,31.9918699 C14.5833333,31.9918699 13.4044715,30.8333333 13.4044715,29.4512195 C13.4044715,28.0691057 14.5833333,26.9105691 15.9857724,26.9105691 C17.3678862,26.9105691 18.4857724,28.0487805 18.4857724,29.4512195 C18.4857724,30.8536585 17.3678862,31.9918699 15.9857724,31.9918699 Z M9.20731707,26.1280488 L7.16463415,26.1280488 L7.16463415,23.4247967 C7.16463415,22.8658537 6.70731707,22.4085366 6.14837398,22.4085366 C5.58943089,22.4085366 5.13211382,22.8658537 5.13211382,23.4247967 L5.13211382,27.1443089 C5.13211382,27.703252 5.58943089,28.1605691 6.14837398,28.1605691 L9.20731707,28.1605691 C9.76626016,28.1605691 10.2235772,27.703252 10.2235772,27.1443089 C10.2235772,26.5853659 9.76626016,26.1280488 9.20731707,26.1280488 Z M14.3597561,20.5894309 C14.3597561,20.0304878 13.902439,19.5731707 13.3434959,19.5731707 L1.01626016,19.5731707 C0.457317073,19.5731707 0,20.0304878 0,20.5894309 C0,21.148374 0.457317073,21.6056911 1.01626016,21.6056911 L13.3434959,21.6056911 C13.902439,21.6056911 14.3597561,21.1585366 14.3597561,20.5894309 Z M3.07926829,16.9207317 L15.4065041,16.9918699 C15.9654472,16.9918699 16.4227642,16.5447154 16.4329268,15.9857724 C16.4430894,15.4166667 15.9857724,14.9593496 15.4268293,14.9593496 L3.0995935,14.8882114 C3.08943089,14.8882114 3.08943089,14.8882114 3.08943089,14.8882114 C2.5304878,14.8882114 2.07317073,15.3353659 2.07317073,15.8943089 C2.06300813,16.4634146 2.5203252,16.9207317 3.07926829,16.9207317 Z M5.15243902,12.3069106 L17.4796748,12.3069106 C18.0386179,12.3069106 18.495935,11.8495935 18.495935,11.2906504 C18.495935,10.7317073 18.0386179,10.2743902 17.4796748,10.2743902 L5.15243902,10.2743902 C4.59349593,10.2743902 4.13617886,10.7317073 4.13617886,11.2906504 C4.13617886,11.8495935 4.59349593,12.3069106 5.15243902,12.3069106 Z M49.5325203,10.9349593 L42.2560976,4.90853659 C42.0731707,4.75609756 41.8495935,4.67479675 41.6056911,4.67479675 L33.0487805,4.67479675 L33.0487805,1.01626016 C33.0487805,0.457317073 32.5914634,0 32.0325203,0 L6.14837398,0 C5.58943089,0 5.13211382,0.457317073 5.13211382,1.01626016 L5.13211382,8.45528455 C5.13211382,9.01422764 5.58943089,9.47154472 6.14837398,9.47154472 C6.70731707,9.47154472 7.16463415,9.01422764 7.16463415,8.45528455 L7.16463415,2.03252033 L31.0264228,2.03252033 L31.0264228,26.1280488 L22.6930894,26.1280488 C22.1341463,26.1280488 21.6768293,26.5853659 21.6768293,27.1443089 C21.6768293,27.703252 22.1341463,28.1605691 22.6930894,28.1605691 L35.101626,28.1605691 C35.6605691,28.1605691 36.1178862,27.703252 36.1178862,27.1443089 C36.1178862,26.5853659 35.6605691,26.1280488 35.101626,26.1280488 L33.0589431,26.1280488 L33.0589431,6.70731707 L41.25,6.70731707 L47.8760163,12.195122 L47.804878,26.1077236 L46.7479675,26.1077236 C46.1890244,26.1077236 45.7317073,26.5650407 45.7317073,27.1239837 C45.7317073,27.6829268 46.1890244,28.1402439 46.7479675,28.1402439 L48.8109756,28.1402439 C49.3699187,28.1402439 49.8272358,27.6930894 49.8272358,27.1341463 L49.9085366,11.7276423 C49.898374,11.4227642 49.7662602,11.1280488 49.5325203,10.9349593 Z"
      ></path>
    </svg>
  </app-header>`
}));
