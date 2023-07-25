// Import stylesheets
//import './style.css';

// Verknüpfung zu Firebase ============================== ============================== ============================== ==============================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set, get, child, update } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
      
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

// ============================== ============================== ============================== ============================== ==============================
// Obere Navbar für alle HTML-Seiten

const obere_navbar = `
<!-- Obere Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light NavbarHome">
  <!-- Navbar Logo HAW-Landshut -->
  <a class="navbar-brand" href="https://www.haw-landshut.de">
    <img
      src="https://www.haw-landshut.de/fileadmin/Resources/Public/Images/landshut_logo.jpg"
      alt="Logo" 
      width="50" 
      height="50" 
    >
  </a>

  <div class="navbar-center">
    <h4 class="navbarueberschift">Prüfungseinsicht</h4>
  </div>

  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="index.html">
        <!-- Navbar Logout Symbol-->
        <img
          src="https://cdn.icon-icons.com/icons2/2248/PNG/512/logout_icon_138409.png"
          alt="Logo" 
          width="40" 
          height="40" 
        >
      </a>
    </li>
  </ul>
</nav>
`;

// ============================== ============================== ============================== ============================== ==============================
// Navbar HTML in das Navbar-Element einfügen

const navbar = document.querySelector('.obere_navbar');
navbar.innerHTML += obere_navbar;

// ============================== ============================== ============================== ============================== ==============================
// Anmelden

// Anmeldekarten-Struktur 
const anmeldekarte_BWL = {
  module: 'Grundlagen BWL',
  dozent: 'Prof. Dr. Mühlfriedel',
  datum: '29.02.2023',
  startzeit: '16:00 Uhr',
  endzeit: '18:00 Uhr',
  raum: 'G 018',
};

const anmeldekarte_IT = {
  module: 'IT',
  dozent: 'Prof. Dr. Greipl',
  datum: '21.02.2023',
  startzeit: '16:00 Uhr',
  endzeit: '19:00 Uhr',
  raum: 'G 002',
};

const anmeldekarte_KI = {
  module: 'Machine Learning',
  dozent: 'Prof. Dr. Greipl',
  datum: '28.02.2023',
  startzeit: '17:00 Uhr',
  endzeit: '18:00 Uhr',
  raum: 'G 010',
};

const anmeldekarte_OR = {
  module: 'Operations Research',
  dozent: 'Prof. Dr. Martens',
  datum: '26.02.2023',
  startzeit: '18:00 Uhr',
  endzeit: '19:00 Uhr',
  raum: 'D 001',
};

const anmeldekarte_Personal = {
  module: 'Personalmanagement',
  dozent: 'Prof. Dr. Speidel',
  datum: '29.02.2023',
  startzeit: '16:00 Uhr',
  endzeit: '18:00 Uhr',
  raum: 'D 001',
};

const anmeldekarte_Statistik  = {
  module: 'Statistik',
  dozent: 'Prof. Dr. Martens',
  datum: '28.02.2023',
  startzeit: '14:00 Uhr',
  endzeit: '18:00 Uhr',
  raum: 'G 002',
};
// ==============================

// Anmeldekarten HTML-Liste
const anmeldeliste = document.querySelector('.anmeldeliste');
anmeldeliste.innerHTML += 
`<div class="card-group">
<div class="card col-sm-12 col-md-12 col-lg-4 border-4"> 
  <!-- mit col kann man die Spaltenanzahl je Bildschirmbreiete anpassen-->
  <div class="card-body">
    <h5 class="card-title text-center">Modul: `+ anmeldekarte_BWL.module +`</h5> <!-- Titel -->
    <hr>
    <p class="card-text">Dozent: `+ anmeldekarte_BWL.dozent +`</p> <!-- Dozent -->
    <p class="card-text">Datum: `+ anmeldekarte_BWL.datum +`</p> <!-- Datum -->
    <p class="card-text">Startzeit: `+ anmeldekarte_BWL.startzeit +`</p> <!-- Startzeit -->
    <p class="card-text">Endzeit: `+ anmeldekarte_BWL.endzeit +`</p> <!-- Endzeit -->
    <p class="card-text">Raum: `+ anmeldekarte_BWL.raum +`</p> <!-- Raum -->
    <button class="btn btn-primary w-100" id="BWL_angemeldet" type="button">Anmelden</button> <!-- w-100 ist volle Breite -->
    <button class="btn btn-primary w-100" id="BWL_abgemeldet" type="button">Abmelden</button>
    <p class="card-text"><small class="text-body-secondary">Letzes Update vor 10 Tagen</small></p>
  </div>
</div>
<div class="card col-sm-12 col-md-12 col-lg-4 border-4">
  <div class="card-body">
  <h5 class="card-title text-center" >Modul: `+ anmeldekarte_KI.module +`</h5> <!-- Titel -->
  <hr>
  <p class="card-text">Dozent: `+ anmeldekarte_KI.dozent +`</p> <!-- Dozent -->
  <p class="card-text">Datum: `+ anmeldekarte_KI.datum +`</p> <!-- Datum -->
  <p class="card-text">Startzeit: `+ anmeldekarte_KI.startzeit +`</p> <!-- Startzeit -->
  <p class="card-text">Endzeit: `+ anmeldekarte_KI.endzeit +`</p> <!-- Endzeit -->
  <p class="card-text">Raum: `+ anmeldekarte_KI.raum +`</p> <!-- Raum -->
  <button class="btn btn-primary w-100" id="KI_angemeldet" type="button">Anmelden</button>
  <button class="btn btn-primary w-100" id="KI_abgemeldet" type="button">Abmelden</button>
  <p class="card-text"><small class="text-body-secondary">Letzes Update vor 11 Tage</small></p>
  </div>
</div>
<div class="card col-sm-12 col-md-12 col-lg-4 border-4"> 
  <!-- mit col kann man die Spaltenanzahl je Bildschirmbreiete anpassen-->
  <div class="card-body">
    <h5 class="card-title text-center">Modul: `+ anmeldekarte_IT.module +`</h5> <!-- Titel -->
    <hr>
    <p class="card-text">Dozent: `+ anmeldekarte_IT.dozent +`</p> <!-- Dozent -->
    <p class="card-text">Datum: `+ anmeldekarte_IT.datum +`</p> <!-- Datum -->
    <p class="card-text">Startzeit: `+ anmeldekarte_IT.startzeit +`</p> <!-- Startzeit -->
    <p class="card-text">Endzeit: `+ anmeldekarte_IT.endzeit +`</p> <!-- Endzeit -->
    <p class="card-text">Raum: `+ anmeldekarte_IT.raum +`</p> <!-- Raum -->
    <button class="btn btn-primary w-100" id="IT_angemeldet" type="button">Anmelden</button>
    <button class="btn btn-primary w-100" id="IT_abgemeldet" type="button">Abmelden</button>
    <p class="card-text"><small class="text-body-secondary">Letzes Update vor 19 Tagen</small></p>
  </div>
</div>
</div>
<div class="card-group">
<div class="card col-sm-12 col-md-12 col-lg-4 border-4">
  <div class="card-body">
  <h5 class="card-title text-center">Modul: `+ anmeldekarte_OR.module +`</h5> <!-- Titel -->
  <hr>
  <p class="card-text">Dozent: `+ anmeldekarte_OR.dozent +`</p> <!-- Dozent -->
  <p class="card-text">Datum: `+ anmeldekarte_OR.datum +`</p> <!-- Datum -->
  <p class="card-text">Startzeit: `+ anmeldekarte_OR.startzeit +`</p> <!-- Startzeit -->
  <p class="card-text">Endzeit: `+ anmeldekarte_OR.endzeit +`</p> <!-- Endzeit -->
  <p class="card-text">Raum: `+ anmeldekarte_OR.raum +`</p> <!-- Raum -->
  <button class="btn btn-primary w-100" id="OR_angemeldet" type="button">Anmelden</button>
  <button class="btn btn-primary w-100" id="OR_abgemeldet" type="button">Abmelden</button>
    <p class="card-text"><small class="text-body-secondary">Letzes Update vor 20 Tage</small></p>
  </div>
</div>

<div class="card col-sm-12 col-md-12 col-lg-4 border-4"> 
  <!-- mit col kann man die Spaltenanzahl je Bildschirmbreiete anpassen-->
  <div class="card-body">
    <h5 class="card-title text-center">Modul: `+ anmeldekarte_Personal.module +`</h5> <!-- Titel -->
    <hr>
    <p class="card-text">Dozent: `+ anmeldekarte_Personal.dozent +`</p> <!-- Dozent -->
    <p class="card-text">Datum: `+ anmeldekarte_Personal.datum +`</p> <!-- Datum -->
    <p class="card-text">Startzeit: `+ anmeldekarte_Personal.startzeit +`</p> <!-- Startzeit -->
    <p class="card-text">Endzeit: `+ anmeldekarte_Personal.endzeit +`</p> <!-- Endzeit -->
    <p class="card-text">Raum: `+ anmeldekarte_Personal.raum +`</p> <!-- Raum -->
    <button class="btn btn-primary w-100" id="Personal_angemeldet" type="button">Anmelden</button>
    <button class="btn btn-primary w-100" id="Personal_abgemeldet" type="button">Abmelden</button>
    <p class="card-text"><small class="text-body-secondary">Letzes Update vor 28 Tagen</small></p>
  </div>
</div>
<div class="card col-sm-12 col-md-12 col-lg-4 border-4">
  <div class="card-body">
  <h5 class="card-title text-center">Modul: `+ anmeldekarte_Statistik.module +`</h5> <!-- Titel -->
  <hr>
  <p class="card-text">Dozent: `+ anmeldekarte_Statistik.dozent +`</p> <!-- Dozent -->
  <p class="card-text">Datum: `+ anmeldekarte_Statistik.datum +`</p> <!-- Datum -->
  <p class="card-text">Startzeit: `+ anmeldekarte_Statistik.startzeit +`</p> <!-- Startzeit -->
  <p class="card-text">Endzeit: `+ anmeldekarte_Statistik.endzeit +`</p> <!-- Endzeit -->
  <p class="card-text">Raum: `+ anmeldekarte_Statistik.raum +`</p> <!-- Raum -->
  <button class="btn btn-primary w-100" id="Statistik_angemeldet" type="button">Anmelden</button>
  <button class="btn btn-primary w-100" id="Statistik_abgemeldet" type="button">Abmelden</button>
    <p class="card-text"><small class="text-body-secondary">Letzes Update vor 29 Tage</small></p>
  </div>
</div>`;
// ==============================

// Funktion aktiviert Anmelde-Button, wenn Anmeldung nicht vorhanden
function anmeldebutton(buttonElement) {
  buttonElement.textContent = 'Anmelden';
  buttonElement.classList.remove('btn-primary');
  buttonElement.classList.add('btn-success');
  buttonElement.disabled = false; // Deaktiviere den Button, um weitere Klicks zu verhindern
}

// Funktion deaktiviert Anmelde-Button, wenn Anmeldung erfolgreich
function anmeldebutton_update(buttonElement) {
  buttonElement.textContent = 'Angemeldet';
  buttonElement.classList.remove('btn-primary');
  buttonElement.classList.add('btn-light');
  buttonElement.disabled = true; // Deaktiviere den Button, um weitere Klicks zu verhindern
}
// ==============================

// Funktion zur Anmeldung und Speichern in der Datenbank
function anmelden(modul) {

  // Pop up zum bestätigen 
  var confirmation = confirm('Möchten Sie sich wirklich zur Prüfungseinsicht anmelden?');

  if (confirmation) {
    update(ref(db, 'users/user1'), {
      [modul]: 1,
    }).then(() => {
      // Datanbankspeicherung erfolgreich
      alert('Sie haben sich erfolgreich zur Prüfungseinsicht angemeldet.');
      location.reload(); // Seite aktualisieren
    }).catch((error) => {
      console.error('Fehler beim Speichern der Daten:', error);
    });
  } else {
    // Benutzer hat Abbrechen geklickt, keine Anmeldung speichern
    alert('Die Anmeldung wurde abgebrochen.');
  }
};
// ==============================

// Event Listener für die Anmeldebuttons
var BWL_anmelde_button = document.getElementById("BWL_angemeldet");
BWL_anmelde_button.addEventListener('click', function() {
  anmelden("BWL_Anmeldestatus"); // Aufruf der anmelden-Funktion
  location.reload() // Seite aktualisieren
});

var BWL_anmelde_button = document.getElementById("KI_angemeldet");
BWL_anmelde_button.addEventListener('click', function() {
  anmelden("KI_Anmeldestatus"); // Aufruf der anmelden-Funktion
  location.reload() // Seite aktualisieren
});

var BWL_anmelde_button = document.getElementById("IT_angemeldet");
BWL_anmelde_button.addEventListener('click', function() {
  anmelden("IT_Anmeldestatus"); // Aufruf der anmelden-Funktion
  location.reload() // Seite aktualisieren
});

var BWL_anmelde_button = document.getElementById("OR_angemeldet");
BWL_anmelde_button.addEventListener('click', function() {
  anmelden("OR_Anmeldestatus"); // Aufruf der anmelden-Funktion
  location.reload() // Seite aktualisieren
});

var BWL_anmelde_button = document.getElementById("Personal_angemeldet");
BWL_anmelde_button.addEventListener('click', function() {
  anmelden("Personal_Anmeldestatus"); // Aufruf der anmelden-Funktion
  location.reload() // Seite aktualisieren
});

var BWL_anmelde_button = document.getElementById("Statistik_angemeldet");
BWL_anmelde_button.addEventListener('click', function() {
  anmelden("Statistik_Anmeldestatus"); // Aufruf der anmelden-Funktion
  location.reload() // Seite aktualisieren
});
// ==============================

// Anmeldebutton Farbe aktualisieren je nach Datenbankwert
var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.BWL_Anmeldestatus === 1) {
        anmeldebutton_update(BWL_angemeldet)}
      else {
        anmeldebutton(BWL_angemeldet)
      };
});

var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.KI_Anmeldestatus === 1) {
        anmeldebutton_update(KI_angemeldet)}
      else {
        anmeldebutton(KI_angemeldet)
      };
});

var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.IT_Anmeldestatus === 1) {
        anmeldebutton_update(IT_angemeldet)}
      else {
        anmeldebutton(IT_angemeldet)
      };
});

var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.OR_Anmeldestatus === 1) {
        anmeldebutton_update(OR_angemeldet)}
      else {
        anmeldebutton(OR_angemeldet)
      };
});

var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.Personal_Anmeldestatus === 1) {
        anmeldebutton_update(Personal_angemeldet)}
      else {
        anmeldebutton(Personal_angemeldet)
      };
});

var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.Statistik_Anmeldestatus === 1) {
        anmeldebutton_update(Statistik_angemeldet)}
      else {
        anmeldebutton(Statistik_angemeldet)
      };
});

// ============================== ============================== ============================== ============================== ==============================
// Abmeldungen

// Funktion aktiviert Abmelde-Button, wenn angemeldet
function abmeldebutton_update(buttonElement) {
  buttonElement.textContent = 'Abmelden';
  buttonElement.classList.remove('btn-primary');
  buttonElement.classList.add('btn-warning');
  buttonElement.disabled = false; // Deaktiviere den Button, um weitere Klicks zu verhindern
};

// Funktion deaktiviert Abmelde-Button, wenn abgemeldet
function abmeldebutton(buttonElement) {
  buttonElement.textContent = '';
  buttonElement.classList.remove('btn-primary');
  buttonElement.classList.add('btn-light');
  buttonElement.disabled = true; // Deaktiviere den Button, um weitere Klicks zu verhindern
};

// Abmelde Funktion Firebase Datenbank
function abmelden(modul) {

  // Pop up zum bestätigen 
  var confirmation = confirm('Möchten Sie sich wirklich zur Prüfungseinsicht im Modul abmelden?');

  if (confirmation) {
    update(ref(db, 'users/user1'), {
      [modul]: 0,
    }).then(() => {
      // Datanbankspeicherung erfolgreich
      alert('Sie haben sich erfolgreich zur Prüfungseinsicht abgemeldet.');
      location.reload(); // Seite aktualisieren
    }).catch((error) => {
      console.error('Fehler beim Speichern der Daten:', error);
    });
  } else {
    // Benutzer hat Abbrechen geklickt, keine Anmeldung speichern
    alert('Die Anmeldung wurde abgebrochen.');
  }
};

// Event Listener für die Abmeldebuttons
var BWL_abmelde_button = document.getElementById("BWL_abgemeldet");
BWL_abmelde_button.addEventListener('click', function() {
  abmelden("BWL_Anmeldestatus"); // Aufruf der abmelden-Funktion
  location.reload() // Seite aktualisieren
});

var KI_abmelde_button = document.getElementById("KI_abgemeldet");
KI_abmelde_button.addEventListener('click', function() {
  abmelden("KI_Anmeldestatus"); // Aufruf der abmelden-Funktion
  location.reload() // Seite aktualisieren
});

var IT_abmelde_button = document.getElementById("IT_abgemeldet");
IT_abmelde_button.addEventListener('click', function() {
  abmelden("IT_Anmeldestatus"); // Aufruf der abmelden-Funktion
  location.reload() // Seite aktualisieren
});

var OR_abmelde_button = document.getElementById("OR_abgemeldet");
OR_abmelde_button.addEventListener('click', function() {
  abmelden("OR_Anmeldestatus"); // Aufruf der abmelden-Funktion
  location.reload() // Seite aktualisieren
});

var Personal_abmelde_button = document.getElementById("Personal_abgemeldet");
Personal_abmelde_button.addEventListener('click', function() {
  abmelden("Personal_Anmeldestatus"); // Aufruf der abmelden-Funktion
  location.reload() // Seite aktualisieren
});

var Statistik_abmelde_button = document.getElementById("Statistik_abgemeldet");
Statistik_abmelde_button.addEventListener('click', function() {
  abmelden("Statistik_Anmeldestatus"); // Aufruf der abmelden-Funktion
  location.reload() // Seite aktualisieren
});

// Anmeldebutton Farbe aktualisieren je nach Datenbankwert
var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.BWL_Anmeldestatus === 1) {
        abmeldebutton_update(BWL_abgemeldet)}
      else{
        abmeldebutton(BWL_abgemeldet);
      };
});

var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.KI_Anmeldestatus === 1) {
        abmeldebutton_update(KI_abgemeldet)}
      else{
        abmeldebutton(KI_abgemeldet);
      };
});

var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.OR_Anmeldestatus === 1) {
        abmeldebutton_update(OR_abgemeldet)}
      else{
        abmeldebutton(OR_abgemeldet);
      };
});

var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.Personal_Anmeldestatus === 1) {
        abmeldebutton_update(Personal_abgemeldet)}
      else{
        abmeldebutton(Personal_abgemeldet);
      };
});

var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.Statistik_Anmeldestatus === 1) {
        abmeldebutton_update(Statistik_abgemeldet)}
      else{
        abmeldebutton(Statistik_abgemeldet);
      };
});

var usersRef = ref(db, '/users/user1');
get(usersRef).then(function(snapshot) {
      var user = snapshot.val();
      if (user && user.IT_Anmeldestatus === 1) {
        abmeldebutton_update(IT_abgemeldet)}
      else{
        abmeldebutton(IT_abgemeldet);
      };
});
// ==============================
// Lade-Animation

function showLoader() {
  document.getElementById('loader').style.display = 'block';
}

// Lade-Animation
function hideLoader() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('content').style.display = 'block'; // Zeige den restlichen Seiteninhalt an
}

// Event Listener für Lade-Animation
window.addEventListener('load', function() {
  showLoader();
  setTimeout(hideLoader, 800); 
});