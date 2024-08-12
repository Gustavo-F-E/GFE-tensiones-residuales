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

});

/*
Para que funcione la carga de informacion en el localStorage debe existir el método "DOMContentLoaded", con lo cual 
esta funcion debe estar aparte
*/
darkThemeConLocalStorage(".dark-theme-btn", "dark-mode", "[data-dark]");
