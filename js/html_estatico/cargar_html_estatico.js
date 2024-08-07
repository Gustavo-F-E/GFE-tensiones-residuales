/*export default function cargar_html_estatico(html, id_contenido, callback) {
  const contenido = document.getElementById(id_contenido);
    fetch(html)
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
}*/
/*
export default function cargar_html_estatico(html, id_contenido) {
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
    })
    .catch((error) => {
      console.error("Hubo un problema con la solicitud Fetch:", error);
    });
}
*/
export default function cargar_html_estatico(html, id_contenido, callback) {
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
