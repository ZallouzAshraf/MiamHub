import { getApp, getApps, initializeApp, FirebaseApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  Auth,
  Persistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { getAnalytics } from "firebase/analytics";

let firebaseapp: FirebaseApp | undefined;

export const getFirebaseApp = (): FirebaseApp => {
  if (firebaseapp) {
    return firebaseapp;
  }

  const firebaseConfig = {
    apiKey: "AIzaSyCHtY0GKBpGvzKLEBvjCR9D302yocSfejI",
    authDomain: "miamhub-6426e.firebaseapp.com",
    projectId: "miamhub-6426e",
    storageBucket: "miamhub-6426e.firebasestorage.app",
    messagingSenderId: "615929678008",
    appId: "1:615929678008:web:b6ea9c0bce234662bb4c4d",
    measurementId: "G-NLRJ9V5HY1",
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
