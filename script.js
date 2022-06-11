const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu");
// Lav variablen "btn", der henviser til ".toggle-btn"
// Lav variablen "menu", der henviser til ".main-menu"

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");
  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  let menuShown = menu.classList.contains("shown");
  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten

  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "x", hvis menuShown er "true"
    btn.textContent = "x";
  } else {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
    btn.textContent = "≡";
  }
  // "toggleMenu()" slutter her
}
// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenvises");
  document.querySelector("#erik_sprite").addEventListener("mousedown", clickHandler);
}

function clickHandler() {
  console.log("clicHandler");
  document.querySelector("#erik_sprite").classList.add("eglad");
  document.querySelector("#erik_sprite").addEventListener("", Reset);
}

// //gør erik normal igen
// function Reset() {
//   document.querySelector("#erik_sprite").offsetLeft;
//   document.querySelector("#erik_sprite").classList.add("erik");
// document.querySelector("#erik_sprite").classList = "";
// document.querySelector("#erik_sprite").offsetLeft;
// document.querySelector("#erik_sprite").classList.add("erik");
