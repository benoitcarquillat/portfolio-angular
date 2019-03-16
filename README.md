# Starter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## This starter already have : 

- a Store (with NGRX, StoreDevtoolsModule, ngrx/router-store, storeFreeze)
- Storybook.
- Lighthouse.
- continuous integration 
- Eslint


## Installation : 

- Run `npm install`
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
- search and replace `starterYoozly` by `projectName`


## how to add continuous integration  : 

- Go to the Pipelines tab on bitbucket and click on enable

## CMD : 

- run Storybook : `npm run storybook`
- run karma test : `npm run test`
- run cypress (e2e test) : `npm run cypress open`
- run eslint : `npm run lint`
- run lighthouse (google metrics) : `npm run build:ci && npm run lighthouse:ci` (you can find a full report on the coverage folder).


