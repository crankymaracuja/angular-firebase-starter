# Firebase Configuration

This project uses the following firebase APIs:
- firebase hosting
- firebase functions
- firebase storage
- firestore
- realtime database

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