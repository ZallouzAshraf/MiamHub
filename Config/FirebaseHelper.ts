import { getApp, getApps, initializeApp, FirebaseApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  Auth,
  Persistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAnalytics } from "firebase/analytics";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from "@env";

let firebaseapp: FirebaseApp | undefined;

export const getFirebaseApp = (): FirebaseApp => {
  if (firebaseapp) {
    return firebaseapp;
  }

  const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
  };

  const app: FirebaseApp =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  // Set up persistence with AsyncStorage
  const persistence: Persistence = getReactNativePersistence(AsyncStorage);

  initializeAuth(app, {
    persistence: persistence,
  });

  firebaseapp = app;
  return firebaseapp;
};
