import hamburguerMenu from "./01_hamburguer/hamburguer.js";
import scrollTopButton from "./05_boton_scroll/boton_scroll.js";
import darkThemeConLocalStorage from "./07_tema_oscuro_con_local_storage/tema_oscuro_con_local_storage.js";
import { cargar_html_estatico, paginas } from "./html_estatico/cargar_html_estatico.js";
import { renderizar_formulas_con_katex, formulas } from "./render_katex/renderizar_formulas_con_katex.js";
import mostrar_ocultar_menu from "./menu_desplegable/menu_desplegable.js";

document.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
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
    const elementosMenu = [
      {
        id_boton: 'hamburger-btn',
        id_icono_abrir: 'hamburger-icon',
        id_icono_cerrar: 'close-icon',
        id_lista_desplegable: 'indice_completo',
        interactivo: true
      },
      {
        id_boton: 'cap_1_btn',
        id_icono_abrir: 'cap_1_hamburger_icon',
        id_icono_cerrar: 'cap_1_close_icon',
        id_lista_desplegable: 'desplegable_capitulo_1',
        interactivo: false
      },
      {
        id_boton: 'cap_2_btn',
        id_icono_abrir: 'cap_2_hamburger_icon',
        id_icono_cerrar: 'cap_2_close_icon',
        id_lista_desplegable: 'desplegable_capitulo_2',
        interactivo: false
      },
      {
        id_boton: 'cap_3_btn',
        id_icono_abrir: 'cap_3_hamburger_icon',
        id_icono_cerrar: 'cap_3_close_icon',
        id_lista_desplegable: 'desplegable_capitulo_3',
        interactivo: false
      },
      {
        id_boton: 'cap_4_btn',
        id_icono_abrir: 'cap_4_hamburger_icon',
        id_icono_cerrar: 'cap_4_close_icon',
        id_lista_desplegable: 'desplegable_capitulo_4',
        interactivo: false
      },
      {
        id_boton: 'cap_5_btn',
        id_icono_abrir: 'cap_5_hamburger_icon',
        id_icono_cerrar: 'cap_5_close_icon',
        id_lista_desplegable: 'desplegable_capitulo_5',
        interactivo: false
      },
      {
        id_boton: 'anexo_5_btn',
        id_icono_abrir: 'anexo_5_hamburger_icon',
        id_icono_cerrar: 'anexo_5_close_icon',
        id_lista_desplegable: 'desplegable_anexo_5',
        interactivo: false
      }
    ];
    elementosMenu.foreach((boton) => {
      hamburgerButton.addEventListener('click', mostrar_ocultar_menu(hamburgerButton, hamburgerIcon, closeIcon, indice_completo, interactivo));
  });
  
  /*
    mostrar_ocultar_menu('hamburger-btn', 'hamburger-icon', 'close-icon', 'indice_completo', 'true');
    mostrar_ocultar_menu('cap_1_btn', 'cap_1_hamburger_icon', 'cap_1_close_icon', 'desplegable_capitulo_1', 'false');
    mostrar_ocultar_menu('cap_2_btn', 'cap_2_hamburger_icon', 'cap_2_close_icon', 'desplegable_capitulo_2', 'false');
    mostrar_ocultar_menu('cap_3_btn', 'cap_3_hamburger_icon', 'cap_3_close_icon', 'desplegable_capitulo_3', 'false');
    mostrar_ocultar_menu('cap_4_btn', 'cap_4_hamburger_icon', 'cap_4_close_icon', 'desplegable_capitulo_4', 'false');
    mostrar_ocultar_menu('cap_5_btn', 'cap_5_hamburger_icon', 'cap_5_close_icon', 'desplegable_capitulo_5', 'false');
    mostrar_ocultar_menu('anexo_5_btn', 'anexo_5_hamburger_icon', 'anexo_5_close_icon', 'desplegable_anexo_5', 'false');*/
  

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
});

/*
Para que funcione la carga de informacion en el localStorage debe existir el método "DOMContentLoaded", con lo cual 
esta funcion debe estar aparte
*/
darkThemeConLocalStorage(".dark-theme-btn", "dark-mode", "[data-dark]");
