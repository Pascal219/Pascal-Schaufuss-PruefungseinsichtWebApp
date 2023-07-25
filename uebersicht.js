// Import stylesheets
//import './style.css';

// Verknüpfung zu Firebase
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
// ==============================

// Obere Navbar für alle HTML-Seiten
const obere_navbar = `<!-- Obere Navbar -->
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
// ==============================

// Navbar HTML in das Navbar-Element einfügen
const navbar = document.querySelector('.obere_navbar');
navbar.innerHTML += obere_navbar;
// ==============================

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
    raum: 'G 012',
  };
// ==============================

// Datenbank Pfad
var usersRef = ref(db, '/users/user1');

// Funktion, um aktive Anmeldungen auf Startseite anzuzeigen
function anmeldungen_anzeigen (anmeldestatus_datenbank,modul, dozent, datum, startzeit, endzeit, raum){
    get(usersRef).then(function(snapshot) {
        var user = snapshot.val();
        if (user && user[anmeldestatus_datenbank] === 1) {
            // Wenn Wert der Variable gleich 1, dann Anmeldung auf Startseite durch HTML Kaskadiereung anzeigen
            var uebersicht = document.getElementById('uebersicht');
            uebersicht.innerHTML += `
             <a class="list-group-item list-group-item-action border-2 card border-success card text-bg-light">
             <div class="d-flex w-100 justify-content-between">
               <h5 class="mb-1">Prüfungseinsicht `+ [modul] +`</h5>
               <small class="text-body-secondary">Anmeldung: heute</small>
             </div>
             <p class="mb-1">Dozent: `+ [dozent] +`</p>
             <p class="mb-1">Datum: `+ [datum] +`</p>
             <p class="mb-1">Startzeit: `+ [startzeit] +`</p>
             <p class="mb-1">Endzeit: `+ [endzeit] +`</p>
             <p class="mb-1">Raum: `+ [raum] +`</p>
             <small class="text-body-secondary">Bitte 10 Minuten vor Termin anwesend sein</small>
           </a>
           <br>
        `;
        };
    });
};
// ==============================

// Funktionsaufrufe für jede Anmeldekarte, sobald Wert der Variable Anmeldestatus gleich 1
anmeldungen_anzeigen ("BWL_Anmeldestatus", anmeldekarte_BWL.module, anmeldekarte_BWL.dozent, anmeldekarte_BWL.datum, anmeldekarte_BWL.startzeit, anmeldekarte_BWL.endzeit, anmeldekarte_BWL.raum);
anmeldungen_anzeigen ("KI_Anmeldestatus", anmeldekarte_KI.module, anmeldekarte_KI.dozent, anmeldekarte_KI.datum, anmeldekarte_KI.startzeit, anmeldekarte_KI.endzeit, anmeldekarte_KI.raum);
anmeldungen_anzeigen ("IT_Anmeldestatus",anmeldekarte_IT.module, anmeldekarte_IT.dozent, anmeldekarte_IT.datum, anmeldekarte_IT.startzeit, anmeldekarte_IT.endzeit, anmeldekarte_IT.raum);
anmeldungen_anzeigen ("OR_Anmeldestatus",anmeldekarte_OR.module, anmeldekarte_OR.dozent, anmeldekarte_OR.datum, anmeldekarte_OR.startzeit, anmeldekarte_OR.endzeit, anmeldekarte_OR.raum);
anmeldungen_anzeigen ("Personal_Anmeldestatus",anmeldekarte_Personal.module, anmeldekarte_Personal.dozent, anmeldekarte_Personal.datum, anmeldekarte_Personal.startzeit, anmeldekarte_Personal.endzeit, anmeldekarte_Personal.raum);
anmeldungen_anzeigen ("Statistik_Anmeldestatus",anmeldekarte_Statistik.module, anmeldekarte_Statistik.dozent, anmeldekarte_Statistik.datum, anmeldekarte_Statistik.startzeit, anmeldekarte_Statistik.endzeit, anmeldekarte_Statistik.raum);
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
  setTimeout(hideLoader, 400); 
});