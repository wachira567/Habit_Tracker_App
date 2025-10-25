// Firebase configuration and initialization for real-time database
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration object with environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

// Initialize Firebase app with the config
const app = initializeApp(firebaseConfig);
// Export the database instance for use in other parts of the app
export const database = getDatabase(app);
