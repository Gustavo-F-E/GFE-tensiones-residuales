import scrollTopButton from "./05_boton_scroll/boton_scroll.js";
import darkThemeConLocalStorage from "./07_tema_oscuro_con_local_storage/tema_oscuro_con_local_storage.js";
import { cargar_html_estatico, paginas } from "./html_estatico/cargar_html_estatico.js";
import { renderizar_formulas_con_katex, formulas } from "./render_katex/renderizar_formulas_con_katex.js";
//import mostrar_ocultar_menu from "./menu_desplegable/menu_desplegable.js";

document.addEventListener("DOMContentLoaded", (e) => {
    scrollTopButton(".scroll-top-btn");
    const cargarPaginas = paginas.map(pagina => cargar_html_estatico(pagina.ruta, pagina.seccion));

    // Esperar a que todas las páginas se carguen
    Promise.all(cargarPaginas).then(() => {
        // Renderizar cada fórmula
        // Iterar sobre el array utilizando forEach
          formulas.forEach(formulaObj => {
            renderizar_formulas_con_katex(formulaObj.id, formulaObj.formula, formulaObj.displayMode);
          });

        // Reemplazar imágenes de baja calidad con media calidad
        const images = document.querySelectorAll("img.lazy");
        //console.log(images);
        let imagesLoaded = 0;
        const totalImages = images.length;
        //console.log(images.length);

        images.forEach((img) => {
            const lowResSrc = img.getAttribute("src");
            const mediumResSrc = img.getAttribute("data-src-medium");
            //console.log(lowResSrc);
            //console.log(mediumResSrc);
            if (mediumResSrc) {
                const newImg = new Image();
                newImg.src = mediumResSrc;
                newImg.onload = () => {
                    img.src = mediumResSrc;
                    imagesLoaded++;
                    if (imagesLoaded === totalImages) {
                        loadHighResImages(images);
                    }
                };
            }
        });


        function loadHighResImages(images) {
            imagesLoaded = 0;
            images.forEach((img) => {
                const highResSrc = img.getAttribute("data-src-high");
                //console.log(highResSrc);
                if (highResSrc) {
                    const newImg = new Image();
                    newImg.src = highResSrc;
                    newImg.onload = () => {
                        img.src = highResSrc;
                        imagesLoaded++;
                        if (imagesLoaded === totalImages) {
                            console.log(
                                "Todas las imágenes de alta calidad han sido cargadas."
                            );
                        }
                    };
                }
            });
        }

    });
    const elementos = document.querySelectorAll(".elemento-arrastrable");

    elementos.forEach((elemento) => {
        let isDragging = false;
        let startY;
        let scrollTop;

        elemento.addEventListener("mousedown", (e) => {
            isDragging = true;
            startY = e.pageY;
            scrollTop = window.scrollY;
            elemento.style.cursor = "grabbing";
            e.preventDefault(); // Previene el comportamiento predeterminado del navegador
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            const deltaY = e.pageY - startY;
            window.scrollTo(0, scrollTop - deltaY);
        });

        document.addEventListener("mouseup", () => {
            if (isDragging) {
                isDragging = false;
                elemento.style.cursor = "grab";
            }
        });
    });

    // Funcionalidad para desplazamiento con el scroll del mouse
    document.addEventListener("wheel", (e) => {
        // Ajusta el desplazamiento en el eje Y basado en el movimiento del scroll del mouse
        window.scrollBy(0, e.deltaY);
        e.preventDefault(); // Previene el comportamiento predeterminado del navegador
    });
  /*
  mostrar_ocultar_menu(
      "hamburger-btn",
      "hamburger-icon",
      "close-icon",
      "indice_completo",
      "true"
  );
  mostrar_ocultar_menu(
      "cap_1_btn",
      "cap_1_hamburger_icon",
      "cap_1_close_icon",
      "desplegable_capitulo_1",
      "false"
  );
  mostrar_ocultar_menu(
      "cap_2_btn",
      "cap_2_hamburger_icon",
      "cap_2_close_icon",
      "desplegable_capitulo_2",
      "false"
  );
  mostrar_ocultar_menu(
      "cap_3_btn",
      "cap_3_hamburger_icon",
      "cap_3_close_icon",
      "desplegable_capitulo_3",
      "false"
  );
  mostrar_ocultar_menu(
      "cap_4_btn",
      "cap_4_hamburger_icon",
      "cap_4_close_icon",
      "desplegable_capitulo_4",
      "false"
  );
  mostrar_ocultar_menu(
      "cap_5_btn",
      "cap_5_hamburger_icon",
      "cap_5_close_icon",
      "desplegable_capitulo_5",
      "false"
  );
  mostrar_ocultar_menu(
      "anexo_5_btn",
      "anexo_5_hamburger_icon",
      "anexo_5_close_icon",
      "desplegable_anexo_5",
      "false"
  );
  function mostrar_ocultar_menu(
      id_boton,
      id_icono_abrir,
      id_icono_cerrar,
      id_lista_desplegable,
      interactivo
  ) {
      const hamburgerButton = document.getElementById(id_boton);
      const hamburgerIcon = document.getElementById(id_icono_abrir);
      const closeIcon = document.getElementById(id_icono_cerrar);
      const indice_completo = document.getElementById(id_lista_desplegable);

      console.log("Elementos seleccionados:");
      console.log({
          hamburgerButton,
          hamburgerIcon,
          closeIcon,
          indice_completo,
      });

      hamburgerButton.addEventListener("click", function () {
        console.log(`Botón ${id_boton} clickeado`);
        console.log(
            `Estado antes de toggle: ${hamburgerIcon.classList}, ${closeIcon.classList}, ${indice_completo.classList}`
        );
        const position = hamburgerButton.getBoundingClientRect();
        console.log(`Posición del elemento clickeado: 
            top: ${position.top}, 
            left: ${position.left}, 
            bottom: ${position.bottom}, 
            right: ${position.right}`);

          // Alterna la visibilidad de los iconos
          hamburgerIcon.classList.toggle("hidden_menu");
          closeIcon.classList.toggle("hidden_menu");

          console.log(`Icono abrir: ${hamburgerIcon.classList}`);
          console.log(`Icono cerrar: ${closeIcon.classList}`);

          // Muestra u oculta el aside
          indice_completo.classList.toggle("hidden_menu");
          console.log(`Menu desplegable: ${indice_completo.classList}`);

          // Controlar la interactividad de los botones
          const desactivar_botones = [
              "cap_1_btn",
              "cap_2_btn",
              "cap_3_btn",
              "cap_4_btn",
              "cap_5_btn",
              "anexo_5_btn",
          ];

          if (interactivo === "false") {
              console.log("Desactivando botones...");
              hamburgerButton.style.pointerEvents = "auto";
              desactivar_botones.forEach((buttonId) => {
                  const button = document.getElementById(buttonId);
                  if (button !== hamburgerButton) {
                      console.log(`Desactivando botón: ${buttonId}`);
                      button.style.pointerEvents = "none";
                  }
              });
          } else {
              console.log("Activando todos los botones...");
              desactivar_botones.forEach((buttonId) => {
                  const button = document.getElementById(buttonId);
                  console.log(`Activando botón: ${buttonId}`);
                  button.style.pointerEvents = "auto";
              });
          }

          const mostrar_icono = [
              "cap_1_hamburger_icon",
              "cap_2_hamburger_icon",
              "cap_3_hamburger_icon",
              "cap_4_hamburger_icon",
              "cap_5_hamburger_icon",
              "anexo_5_hamburger_icon",
          ];
          const ocultar_icono = [
              "cap_1_close_icon",
              "cap_2_close_icon",
              "cap_3_close_icon",
              "cap_4_close_icon",
              "cap_5_close_icon",
              "anexo_5_close_icon",
          ];
          const ocultar_menues = [
              "desplegable_capitulo_1",
              "desplegable_capitulo_2",
              "desplegable_capitulo_3",
              "desplegable_capitulo_4",
              "desplegable_capitulo_5",
              "desplegable_anexo_5",
          ];

          if (interactivo === "true") {
              console.log("Mostrando y ocultando íconos y menús...");
              mostrar_icono.forEach((buttonId) => {
                  const button = document.getElementById(buttonId);
                  if (button.classList.contains("hidden_menu")) {
                      console.log(`Mostrando ícono: ${buttonId}`);
                      button.classList.toggle("hidden_menu");
                  }
              });
              ocultar_icono.forEach((buttonId) => {
                  const button = document.getElementById(buttonId);
                  if (!button.classList.contains("hidden_menu")) {
                      console.log(`Ocultando ícono: ${buttonId}`);
                      button.classList.toggle("hidden_menu");
                  }
              });
              ocultar_menues.forEach((buttonId) => {
                  const button = document.getElementById(buttonId);
                  if (!button.classList.contains("hidden_menu")) {
                      console.log(`Ocultando menú: ${buttonId}`);
                      button.classList.toggle("hidden_menu");
                  }
              });
          }
          if (
              interactivo === "false" &&
              closeIcon.classList.contains("hidden_menu")
          ) {
              console.log("Reactivando botones por condición específica...");
              desactivar_botones.forEach((buttonId) => {
                  const button = document.getElementById(buttonId);
                  button.style.pointerEvents = "auto";
              });
          }
      });
  }*/

});

/*
Para que funcione la carga de informacion en el localStorage debe existir el método "DOMContentLoaded", con lo cual 
esta funcion debe estar aparte
*/
darkThemeConLocalStorage(".dark-theme-btn", "dark-mode", "[data-dark]");
