import hamburguerMenu from "./01_hamburguer/hamburguer.js";
import scrollTopButton from "./05_boton_scroll/boton_scroll.js";
import darkThemeConLocalStorage from "./07_tema_oscuro_con_local_storage/tema_oscuro_con_local_storage.js";
import cargar_html_estatico from "./html_estatico/cargar_html_estatico.js";
import renderizar_formulas_con_katex from "./render_katex/renderizar_formulas_con_katex.js";

document.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    scrollTopButton(".scroll-top-btn");

    const cargarPaginas = [
        cargar_html_estatico("../pages/indice.html", "indice"),
        cargar_html_estatico("../pages/tablas.html", "tablas"),
        cargar_html_estatico("../pages/figuras.html", "figuras"),
        cargar_html_estatico("../pages/simbolos.html", "simbolos"),
        cargar_html_estatico("../pages/abreviaturas.html", "abreviaturas"),
        cargar_html_estatico("../pages/capitulo_1.html", "capitulo_1"),
        cargar_html_estatico("../pages/capitulo_2.html", "capitulo_2"),
        cargar_html_estatico("../pages/capitulo_3.html", "capitulo_3"),
        cargar_html_estatico("../pages/capitulo_4.html", "capitulo_4"),
        cargar_html_estatico("../pages/capitulo_5.html", "capitulo_5"),
        cargar_html_estatico("../pages/capitulo_6.html", "capitulo_6"),
        cargar_html_estatico("../pages/capitulo_7.html", "capitulo_7"),
        cargar_html_estatico("../pages/anexo_1.html", "anexo_1"),
        cargar_html_estatico("../pages/anexo_2.html", "anexo_2"),
        cargar_html_estatico("../pages/anexo_3.html", "anexo_3"),
        cargar_html_estatico("../pages/anexo_4.html", "anexo_4"),
        cargar_html_estatico("../pages/anexo_5.html", "anexo_5"),
        cargar_html_estatico("../pages/referencias.html", "referencias"),
    ];

    // Esperar a que todas las páginas se carguen
    Promise.all(cargarPaginas).then(() => {
        // Renderizar cada fórmula
        renderizar_formulas_con_katex("ebx_1", "\\mathrm{E}_{b}^{x}", "true");
        renderizar_formulas_con_katex("raj2_1", "\\mathrm{R}_{2}^{aj}", "true");
        renderizar_formulas_con_katex(
            "Ee_1_1",
            "\\begin{aligned} E_1 &= E_f V_f + E_m (1 - V_f) \\end{aligned}",
            "true"
        );
        renderizar_formulas_con_katex(
            "NU12_1",
            "\\begin{aligned} \\nu_{12} &= \\nu_f V_f + \\nu_m (1 - V_f) \\end{aligned}",
            "true"
        );
        renderizar_formulas_con_katex(
            "E2_1",
            "\\begin{aligned} E_2 &= \\left[ \\frac{(1 - V_f)}{E_m} + \\frac{V_f}{E_f} \\right]^{-1} \\end{aligned}",
            "true"
        );
        renderizar_formulas_con_katex(
            "Gg12_1",
            "\\begin{aligned} G_{12} &= \\left[ \\frac{(1 - V_f)}{G_m} + \\frac{V_f}{G_f} \\right]^{-1} \\end{aligned}",
            "true"
        );
        renderizar_formulas_con_katex(
            "G23",
            "\\begin{aligned} G_{23} &= G_m \\frac{V_f + \\eta_4 (1 - V_f)}{\\eta_4 (1 - V_f) + V_f \\frac{G_m}{G_f}} \\end{aligned}",
            "true"
        );
        renderizar_formulas_con_katex(
            "ETA4",
            "\\begin{aligned} \\eta_4 &= \\frac{3 - 4\\nu_m + \\frac{G_m}{G_f}}{4(1 - \\nu_m)} \\end{aligned}",
            "true"
        );
        renderizar_formulas_con_katex(
            "NU23",
            "\\begin{aligned} G_{23} &= \\frac{E_2}{2(1+\\nu_{23})} \\Rightarrow \\nu_{23} = \\frac{E_2}{2G_{23}} - 1 \\end{aligned}",
            "true"
        );
        renderizar_formulas_con_katex(
            "M",
            "M = \\frac{\\left( \\frac{\\delta}{a} \\right) E_x^b \\ln\\left(\\frac{b}{a}\\right) \\left\\{(b^2 - a^2)^2 - 4a^2 b^2 \\left[\\ln\\left(\\frac{b}{a}\\right)\\right]^2\\right\\}}{16 \\pi (b^2 - a^2)}",
            "true"
        );
        renderizar_formulas_con_katex("ebx_2", "\\mathrm{E}_{b}^{x}", "false");
        renderizar_formulas_con_katex(
            "l0",
            "\\displaystyle \\delta = l - l_0 = \\varepsilon l_0",
            "true"
        );
        // Ecuación para σ_z
        renderizar_formulas_con_katex(
            "sigma_Z",
            "\\sigma_z = -\\frac{4M}{N} \\left[ \\frac{a^2 b^2}{r^2} \\ln\\left(\\frac{b}{a}\\right) + b^2 \\ln\\left(\\frac{r}{b}\\right) + a^2 \\ln\\left(\\frac{a}{r}\\right) \\right]",
            "true"
        );

        // Ecuación para σ_y
        renderizar_formulas_con_katex(
            "sigma_Y",
            "\\sigma_y = -\\frac{4M}{N} \\left[ -\\frac{a^2 b^2}{r^2} \\ln\\left(\\frac{b}{a}\\right) + b^2 \\ln\\left(\\frac{r}{b}\\right) + a^2 \\ln\\left(\\frac{a}{r}\\right) + b^2 - a^2 \\right]",
            "true"
        );

        // Ecuación para σ_yz
        renderizar_formulas_con_katex("sigma_YZ", "\\sigma_{yz} = 0", "true");

        // Ecuación para N
        renderizar_formulas_con_katex(
            "N",
            "N = (b^2 - a^2)^2 - 4a^2 b^2 \\left[ \\ln\\left(\\frac{b}{a}\\right) \\right]^2",
            "true"
        );

        renderizar_formulas_con_katex("ebx_3", "\\mathrm{E}_{b}^{x}", "false");

        // Ecuación para E_x^b
        renderizar_formulas_con_katex(
            "Exb",
            "E_x^b = \\frac{12 \\left(D_{11} D_{22} - D_{12}^2 \\right)}{t^3 D_{22}}",
            "true"
        );

        // Ecuación para D_{ij}
        renderizar_formulas_con_katex(
            "Dij",
            "D_{ij} = \\sum_{k=1}^N \\left[ \\Phi_{ij} \\right]_k \\left( t_k z_k'^2 + \\frac{t_k^3}{12} \\right), \\; i,j=1,2",
            "true"
        );

        // Ecuación para Φ_{11}
        renderizar_formulas_con_katex(
            "Phi11",
            "\\Phi_{11} = Q_{11} \\cos^4 \\theta + 2 \\left(Q_{12} + 2Q_{66} \\right) \\sin^2 \\theta \\cos^2 \\theta + Q_{22} \\sin^4 \\theta",
            "true"
        );

        // Ecuación para Φ_{22}
        renderizar_formulas_con_katex(
            "Phi22",
            "\\Phi_{22} = Q_{11} \\sin^4 \\theta + 2 \\left(Q_{12} + 2Q_{66} \\right) \\sin^2 \\theta \\cos^2 \\theta + Q_{22} \\cos^4 \\theta",
            "true"
        );

        // Ecuación para Φ_{12}
        renderizar_formulas_con_katex(
            "Phi12",
            "\\Phi_{12} = \\left(Q_{11} + Q_{22} - 4Q_{66} \\right) \\sin^2 \\theta \\cos^2 \\theta + Q_{12} \\left( \\sin^4 \\theta + \\cos^4 \\theta \\right)",
            "true"
        );

        // Ecuaciones para Q_{ij}
        renderizar_formulas_con_katex(
            "Q11",
            "Q_{11} = \\frac{E_1}{1 - \\nu_{12}^2 \\frac{E_2}{E_1}}",
            "true"
        );

        renderizar_formulas_con_katex(
            "Q22",
            "Q_{22} = \\frac{E_2}{1 - \\nu_{12}^2 \\frac{E_2}{E_1}}",
            "true"
        );

        renderizar_formulas_con_katex(
            "Q12",
            "Q_{12} = \\frac{\\nu_{12} E_2}{1 - \\nu_{12}^2 \\frac{E_2}{E_1}}",
            "true"
        );

        renderizar_formulas_con_katex("Q66", "Q_{66} = G_{12}", "true");

        // Ecuación para ε_y^0
        renderizar_formulas_con_katex(
            "epsilon_y0",
            "\\varepsilon_y^0 = -\\frac{\\Delta T}{A_{22}} \\sum_{k=1}^N \\left[ \\Phi_{12}^k \\alpha_x^k + \\Phi_{22}^k \\alpha_y^k + \\Phi_{26}^k \\alpha_{xy}^k \\right] t_k",
            "true"
        );

        // Ecuación para Φ_{26}
        renderizar_formulas_con_katex(
            "Phi26",
            "\\Phi_{26} = \\left(Q_{11} - Q_{12} - 2Q_{66} \\right) \\sin^3 \\theta \\cos \\theta + \\left(Q_{12} - Q_{22} + 2Q_{66} \\right) \\sin \\theta \\cos^3 \\theta",
            "true"
        );

        // Matrices para α
        renderizar_formulas_con_katex(
            "alpha_matrix",
            "\\left[ \\begin{matrix} \\alpha_x \\\\ \\alpha_y \\\\ \\alpha_{xy} \\end{matrix} \\right] = \\left[ \\begin{matrix} \\cos^2 \\theta & \\sin^2 \\theta & -2 \\cos \\theta \\sin \\theta \\\\ \\sin^2 \\theta & \\cos^2 \\theta & 2 \\cos \\theta \\sin \\theta \\\\ 2 \\cos \\theta \\sin \\theta & -2 \\cos \\theta \\sin \\theta & \\cos^2 \\theta - \\sin^2 \\theta \\end{matrix} \\right] \\left[ \\begin{matrix} \\alpha_1 \\\\ \\alpha_2 \\\\ 0 \\end{matrix} \\right]",
            "true"
        );

        renderizar_formulas_con_katex(
            "alpha_expanded",
            "\\left[ \\begin{matrix} \\alpha_x \\\\ \\alpha_y \\\\ \\alpha_{xy} \\end{matrix} \\right] = \\left[ \\begin{matrix} \\alpha_1 \\cos^2 \\theta + \\alpha_2 \\sin^2 \\theta \\\\ \\alpha_1 \\sin^2 \\theta + \\alpha_2 \\cos^2 \\theta \\\\ 2 \\cos \\theta \\sin \\theta (\\alpha_1 - \\alpha_2) \\end{matrix} \\right]",
            "true"
        );

        // Ecuaciones para α_1 y α_2
        renderizar_formulas_con_katex(
            "alpha1",
            "\\alpha_1 = \\frac{\\alpha_A V_f E_A + \\alpha_m V_m E_m}{E_1}",
            "true"
        );

        renderizar_formulas_con_katex(
            "alpha2",
            "\\alpha_2 = \\alpha_3 = \\alpha_T \\sqrt{V_f} + (1 - \\sqrt{V_f}) \\left(1 + V_f \\frac{\\nu_m E_A}{E_1} \\right) \\alpha_m",
            "true"
        );

        // Ecuación para A_{22}
        renderizar_formulas_con_katex(
            "A22",
            "A_{22} = \\sum_{k=1}^N \\left[ \\left( \\Phi_{22} \\right)_k \\right] t_k",
            "true"
        );

        // Fórmula para el momento residual (FEM)
        renderizar_formulas_con_katex(
            "moment_residual",
            "Momento Residual (FEM) = \\frac{\\text{deformación experimental}}{-2 \\times \\text{desplazamiento (Momento unitario(FEM))}/3.175}",
            "true"
        );

        // Fórmula para ε
        renderizar_formulas_con_katex(
            "epsilon",
            "\\varepsilon = \\frac{l - l_0}{l_0} = \\frac{l_0 - 2l^* - l_0}{l_0} = \\frac{-2l^*}{l_0}",
            "false"
        );

        // Reemplazar imágenes de baja calidad con media calidad
        const images = document.querySelectorAll("img.lazy");
        console.log(images);
        let imagesLoaded = 0;
        const totalImages = images.length;
        console.log(images.length);

        images.forEach((img) => {
            const lowResSrc = img.getAttribute("src");
            const mediumResSrc = img.getAttribute("data-src-medium");
            console.log(lowResSrc);
            console.log(mediumResSrc);
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
                console.log(highResSrc);
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
