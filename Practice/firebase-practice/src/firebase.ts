// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCfKYJ6sobC6guVbrBtgXtGkPvVj341xB0",
  authDomain: "fir-practice-nomard-hs.firebaseapp.com",
  projectId: "fir-practice-nomard-hs",
  storageBucket: "fir-practice-nomard-hs.appspot.com",
  messagingSenderId: "225983066071",
  appId: "1:225983066071:web:dc28d6b0e5c9ad3e26e592",
  measurementId: "G-LNWC98L2DB",
};

// Initialize Firebase
// 초기화된 나의 앱이 App이라는 변수명에 포함되어 있음
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app)
export const db = getFirestore(app)