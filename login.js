// Import stylesheets
//import './style.css';

// Verknüpfung zu Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrpqcgB1Ud6SGCqcUK52-5t6tBKantsW0",
  authDomain: "case-study-1b611.firebaseapp.com",
  databaseURL: "https://case-study-1b611-default-rtdb.firebaseio.com",
  projectId: "case-study-1b611",
  storageBucket: "case-study-1b611.appspot.com",
  messagingSenderId: "743186733018",
  appId: "1:743186733018:web:d906c08a2615cc715592e3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// ==============================


// Login ========================
document.getElementById("login").addEventListener("click", function(event) {

  // Benutzereingaben in Var speichern
  var email = document.getElementById("email").value;
  var password = document.getElementById("passwort").value;

  // Eingabe darf nicht leer sein
  if (email.trim() === '' || password.trim() === '') {
    alert("Bitte geben Sie Ihre E-Mail und das Passwort ein!");
    return;
  }

  // Pfad Firebase-Datenbank
  var usersRef = ref(db, '/users/user1');

  // Benutzer in der Datenbank suchen und vergleichen
  // snapchot = Datenbankabfrage zu bestimmten Zeitpunkt
  get(usersRef)
    .then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.email === email && user.password === password) {
        // Wenn richtig, dann weiterleiten
        window.location.href = "einsicht.html";
      } else {
        // Sonst alert
        alert("Falsche E-Mail oder Passwort!");
      }
    })
    .catch(function(error) {
      // Fehler
      console.error("Fehler beim Datenbankzugriff", error);
    });
});
// ==============================