// js/firebase-config.js

// Import fungsi yang dibutuhkan dari Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js";
// Jika Anda berencana menggunakan Firestore nanti, tambahkan:
// import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// Konfigurasi Firebase untuk aplikasi web Anda
// GANTI DENGAN KONFIGURASI PROYEK ANDA YANG SEBENARNYA DARI FIREBASE CONSOLE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALV3jwxF1oO-M3nriY-hqDsktPJNJnPWU", // Ganti dengan API Key Anda jika berbeda
    authDomain: "cartamerta.firebaseapp.com",
    databaseURL: "https://cartamerta-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cartamerta",
    storageBucket: "cartamerta.appspot.com", // Periksa apakah ini .appspot.com atau .firebasestorage.app
    messagingSenderId: "453244930409",
    appId: "1:453244930409:web:4474d0fffd95683ad815f8",
    measurementId: "G-LT70P0T3S5"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi layanan Firebase yang akan digunakan
const analytics = getAnalytics(app); // Untuk Google Analytics (opsional)
const auth = getAuth(app);             // Untuk Firebase Authentication
const db = getDatabase(app);           // Untuk Firebase Realtime Database
const storage = getStorage(app);       // Untuk Firebase Storage (upload file)
// const firestore = getFirestore(app); // Jika menggunakan Firestore

// Ekspor instance layanan agar bisa diimpor di file JavaScript lain
export { app, analytics, auth, db, storage /*, firestore */ };