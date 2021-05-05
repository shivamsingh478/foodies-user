// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAdM2KCq4jWxcxr9sMV4Hw5Lc6JmbsCh2s",
    authDomain: "foodiesapp-dd4e5.firebaseapp.com",
    databaseURL: "https://foodiesapp-dd4e5.firebaseio.com",
    projectId: "foodiesapp-dd4e5",
    storageBucket: "foodiesapp-dd4e5.appspot.com",
    messagingSenderId: "178338664955",
    appId: "1:178338664955:web:ac692ad249156b8e03fb5e",
    measurementId: "G-LP0K0D4YNG",
  },
  onesignal: {
    appId: '',
    googleProjectNumber: '',
    restKey: ''
  },
  stripe: {
    sk: ''
  },
  paypal: {
    sandbox: '',
    production: 'YOUR_PRODUCTION_CLIENT_ID'
  },
  general: {
    symbol: '$',
    code: 'USD'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
