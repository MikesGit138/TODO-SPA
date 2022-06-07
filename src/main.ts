import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIdb5kG1QGg46l9oyjaQ-9pfMB_J1j06U",
  authDomain: "tsari-todo.firebaseapp.com",
  projectId: "tsari-todo",
  storageBucket: "tsari-todo.appspot.com",
  messagingSenderId: "455473469525",
  appId: "1:455473469525:web:51b16dae62d1fd0c95dcdc",
  measurementId: "G-GZJQ3KC4TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);