# AngularFirebaseStarter

This repo is your jumpstart to a free hosted fullstack-web-application by using: 

## [Angular 10](https://blog.angular.io/version-10-of-angular-now-available-78960babd41)

- [ES6/ES2015](http://es6-features.org/#Constants)
- [TypeScript 3.9](https://devblogs.microsoft.com/typescript/announcing-typescript-3-9/)
- [SCSS](https://docs.gitlab.com/ee/development/fe_guide/style/scss.html)
- [NodeJS 8.17.0](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8.17.0)

Download and install [NodeJS 8.17.0 from here](https://nodejs.org/dist/latest-v8.x/).
<mark>The firebase spark plan does not work with NodeJS version 10 or higher!</mark> If you want to use a newer version of NodeJS, upgrade to at least pay as you go.

## [Firebase](https://firebase.google.com/docs)

- [Hosting](https://firebase.google.com/docs/hosting)
- [Authentication](https://firebase.google.com/docs/auth)
- [Functions](https://firebase.google.com/docs/functions)
- [Firestore](https://firebase.google.com/docs/firestore)
- [Storage](https://firebase.google.com/docs/storage)
- [Realtime Database](https://firebase.google.com/docs/database)

# Angular Configuration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Firebase Configuration

[Login to firebase](https://firebase.google.com/), go to the firebase console and add a new project.

You can find the [CLI docs here](https://firebase.google.com/docs/cli).

## Setup Firebase Hosting

Go to `Hosting` and click `Start now`.

Firebase-Tools is already installed in your project. Make sure to run `npm install` at least once before running the app. Tick the tickbox for installing the SDK.

Run `firebase login` in your terminal and follow the instructions.

Firebase is already initialized in this project.

Add an alias and click `Register`.

The SDK is already added to this project.

Run `firebase use --add` in your terminal and follow the instructions.

To deploy your frontend to firebase run `npm run deploy:hosting`. You can find your live URL in the terminal.

Read more about [Hosting here](https://firebase.google.com/docs/hosting).

## Setup Firebase Authentication

