export default function mostrar_ocultar_menu(id_boton, id_icono_abrir, id_icono_cerrar, id_lista_desplegable, interactivo) {
  /*
  const hamburgerButton = document.getElementById(id_boton);
  const hamburgerIcon = document.getElementById(id_icono_abrir);
  const closeIcon = document.getElementById(id_icono_cerrar);
  const indice_completo = document.getElementById(id_lista_desplegable);

  console.log(`hamburgerButton: ${hamburgerButton}`);
  console.log(`hamburgerIcon: ${hamburgerIcon}`);
  console.log(`closeIcon: ${closeIcon}`);
  console.log(`indice_completo: ${indice_completo}`);

  hamburgerButton.addEventListener('click', function () {*/
  // Alterna la visibilidad de los iconos
  const hamburgerButton = document.getElementById(id_boton);
  const hamburgerIcon = document.getElementById(id_icono_abrir);
  const closeIcon = document.getElementById(id_icono_cerrar);
  const indice_completo = document.getElementById(id_lista_desplegable);
  //const interactivo = interactivo;
  hamburgerIcon.classList.toggle('hidden_menu');
  closeIcon.classList.toggle('hidden_menu');
  // Muestra u oculta el aside
  indice_completo.classList.toggle('hidden_menu');
    // Controlar la interactividad de los botones

    const desactivar_botones = ['cap_1_btn', 'cap_2_btn', 'cap_3_btn','cap_4_btn', 'cap_5_btn', 'anexo_5_btn'];
    if (interactivo === 'false') {
      hamburgerButton.style.pointerEvents = 'auto';
      desactivar_botones.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button !== hamburgerButton) {
          button.style.pointerEvents= 'none';
        }
      });
    } else {
      desactivar_botones.forEach(buttonId => {
      const button = document.getElementById(buttonId);
      button.style.pointerEvents= 'auto';
    });
  }
  const mostrar_icono = ['cap_1_hamburger_icon', 'cap_2_hamburger_icon', 'cap_3_hamburger_icon','cap_4_hamburger_icon', 'cap_5_hamburger_icon', 'anexo_5_hamburger_icon'];
    const ocultar_icono = ['cap_1_close_icon', 'cap_2_close_icon', 'cap_3_close_icon','cap_4_close_icon', 'cap_5_close_icon', 'anexo_5_close_icon'];
    const ocultar_menues = ['desplegable_capitulo_1', 'desplegable_capitulo_2', 'desplegable_capitulo_3', 'desplegable_capitulo_4', 'desplegable_capitulo_5', 'desplegable_anexo_5'];
    if (interactivo === 'true') {
      mostrar_icono.forEach(buttonId => {
      const button = document.getElementById(buttonId);
      if (button.classList.contains('hidden_menu')){button.classList.toggle('hidden_menu');}
      });
      ocultar_icono.forEach(buttonId => {
      const button = document.getElementById(buttonId);
      if (!button.classList.contains('hidden_menu')){button.classList.toggle('hidden_menu');}
      });
      ocultar_menues.forEach(buttonId => {
      const button = document.getElementById(buttonId);
      if (!button.classList.contains('hidden_menu')){button.classList.toggle('hidden_menu');}
      });
    }
    if (interactivo === 'false' && closeIcon.classList.contains('hidden_menu')) {
      desactivar_botones.forEach(buttonId => {
      const button = document.getElementById(buttonId);
      button.style.pointerEvents= 'auto';
    });
    }
}
//)}