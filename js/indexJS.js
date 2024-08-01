import hamburguerMenu from "./01_hamburguer/hamburguer.js";
import scrollTopButton from "./05_boton_scroll/boton_scroll.js";
import darkThemeConLocalStorage from "./07_tema_oscuro_con_local_storage/tema_oscuro_con_local_storage.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  scrollTopButton(".scroll-top-btn");
});

/*
Para que funcione la carga de informacion en el localStorage debe existir el método "DOMContentLoaded", con lo cual 
esta funcion debe estar aparte
*/
darkThemeConLocalStorage(".dark-theme-btn", "dark-mode", "[data-dark]");