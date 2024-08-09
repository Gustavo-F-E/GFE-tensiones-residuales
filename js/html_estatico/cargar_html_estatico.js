export function cargar_html_estatico(html, id_contenido, callback) {
  const contenido = document.getElementById(id_contenido);
  return fetch(html)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al cargar el archivo HTML");
      }
      return response.text();
    })
    .then((data) => {
      contenido.innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => {
      console.error("Hubo un problema con la solicitud Fetch:", error);
    });
}

export const paginas = [
  { ruta: "../pages/indice.html", seccion: "indice" },
  { ruta: "../pages/tablas.html", seccion: "tablas" },
  { ruta: "../pages/figuras.html", seccion: "figuras" },
  { ruta: "../pages/simbolos.html", seccion: "simbolos" },
  { ruta: "../pages/abreviaturas.html", seccion: "abreviaturas" },
  { ruta: "../pages/capitulo_1.html", seccion: "capitulo_1" },
  { ruta: "../pages/capitulo_2.html", seccion: "capitulo_2" },
  { ruta: "../pages/capitulo_3.html", seccion: "capitulo_3" },
  { ruta: "../pages/capitulo_4.html", seccion: "capitulo_4" },
  { ruta: "../pages/capitulo_5.html", seccion: "capitulo_5" },
  { ruta: "../pages/capitulo_6.html", seccion: "capitulo_6" },
  { ruta: "../pages/capitulo_7.html", seccion: "capitulo_7" },
  { ruta: "../pages/anexo_1.html", seccion: "anexo_1" },
  { ruta: "../pages/anexo_2.html", seccion: "anexo_2" },
  { ruta: "../pages/anexo_3.html", seccion: "anexo_3" },
  { ruta: "../pages/anexo_4.html", seccion: "anexo_4" },
  { ruta: "../pages/anexo_5.html", seccion: "anexo_5" },
  { ruta: "../pages/referencias.html", seccion: "referencias" },
];