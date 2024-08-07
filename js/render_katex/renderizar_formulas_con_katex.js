import katex from "../../katex/katex.mjs";

export default function renderizar_formulas_con_katex(id, formula, tipo_de_display) {
  const element = document.getElementById(id);
  if (element) {
    katex.render(formula, element, {
      throwOnError: false,
      displayMode: tipo_de_display === "true"
    });
  } else {
    console.error(`Elemento con id ${id} no encontrado.`);
  }
}