
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWlshmSusbI3uaqzAqPLOKiNWniC-9NLQ",
  authDomain: "taskcanvas-454c4.firebaseapp.com",
  projectId: "taskcanvas-454c4",
  storageBucket: "taskcanvas-454c4.appspot.com",
  messagingSenderId: "603758464657",
  appId: "1:603758464657:web:d5c3fe8d69c743c0967930"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);