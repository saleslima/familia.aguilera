import { firebaseConfig } from "./constants.js";

// Initialize Firebase using compat SDK (loaded via script tags)
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export { app, db };