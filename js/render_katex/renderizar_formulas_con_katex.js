import katex from "../../katex/katex.mjs";

export function renderizar_formulas_con_katex(id, formula, tipo_de_display) {
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

export const formulas = [
    { id: "ebx_1", formula: "\\mathrm{E}_{b}^{x}", displayMode: true },
    { id: "raj2_1", formula: "\\mathrm{R}_{2}^{aj}", displayMode: true },
    {
        //Ec.1
        id: "Ee_1_1",
        formula:
            "\\begin{aligned} E_1 &= E_f V_f + E_m (1 - V_f) \\end{aligned}",
        displayMode: true,
    },
    {
        //Ec.1
        id: "NU12_1",
        formula:
            "\\begin{aligned} \\nu_{12} &= \\nu_f V_f + \\nu_m (1 - V_f) \\end{aligned}",
        displayMode: true,
    },
    {
        //Ec.1
        id: "E2_1",
        formula:
            "\\begin{aligned} E_2 &= \\left[ \\frac{(1 - V_f)}{E_m} + \\frac{V_f}{E_f} \\right]^{-1} \\end{aligned}",
        displayMode: true,
    },
    {
        //Ec.1
        id: "Gg12_1",
        formula:
            "\\begin{aligned} G_{12} &= \\left[ \\frac{(1 - V_f)}{G_m} + \\frac{V_f}{G_f} \\right]^{-1} \\end{aligned}",
        displayMode: true,
    },
    {
        //Ec.2
        id: "G23",
        formula:
            "\\begin{aligned} G_{23} &= G_m \\frac{V_f + \\eta_4 (1 - V_f)}{\\eta_4 (1 - V_f) + V_f \\frac{G_m}{G_f}} \\end{aligned}",
        displayMode: true,
    },
    {
        //Ec.3
        id: "ETA4",
        formula:
            "\\begin{aligned} \\eta_4 &= \\frac{3 - 4\\nu_m + \\frac{G_m}{G_f}}{4(1 - \\nu_m)} \\end{aligned}",
        displayMode: true,
    },
    {
        //Ec.4
        id: "NU23",
        formula:
            "\\begin{aligned} G_{23} &= \\frac{E_2}{2(1+\\nu_{23})} \\Rightarrow \\nu_{23} = \\frac{E_2}{2G_{23}} - 1 \\end{aligned}",
        displayMode: true,
    },
    {
        //Ec.5
        id: "M",
        formula:
            "M = \\frac{\\left( \\frac{\\delta}{a} \\right) E_x^b \\ln\\left(\\frac{b}{a}\\right) \\left\\{(b^2 - a^2)^2 - 4a^2 b^2 \\left[\\ln\\left(\\frac{b}{a}\\right)\\right]^2\\right\\}}{16 \\pi (b^2 - a^2)}",
        displayMode: true,
    },
    { id: "ebx_2", formula: "\\mathrm{E}_{b}^{x}", displayMode: false },
    {
        //Ec.6
        id: "l0",
        formula: "\\displaystyle \\delta = l - l_0 = \\varepsilon l_0",
        displayMode: true,
    },
    {
        //Ec.7
        id: "sigma_Z",
        formula:
            "\\sigma_z = -\\frac{4M}{N} \\left[ \\frac{a^2 b^2}{r^2} \\ln\\left(\\frac{b}{a}\\right) + b^2 \\ln\\left(\\frac{r}{b}\\right) + a^2 \\ln\\left(\\frac{a}{r}\\right) \\right]",
        displayMode: true,
    },
    {
        //Ec.8
        id: "sigma_Y",
        formula:
            "\\sigma_y = -\\frac{4M}{N} \\left[ -\\frac{a^2 b^2}{r^2} \\ln\\left(\\frac{b}{a}\\right) + b^2 \\ln\\left(\\frac{r}{b}\\right) + a^2 \\ln\\left(\\frac{a}{r}\\right) + b^2 - a^2 \\right]",
        displayMode: true,
    },
    { id: "sigma_YZ", formula: "\\sigma_{yz} = 0", displayMode: true },
    {
        id: "N",
        formula:
            "N = (b^2 - a^2)^2 - 4a^2 b^2 \\left[ \\ln\\left(\\frac{b}{a}\\right) \\right]^2",
        displayMode: true,
    },
    { id: "ebx_3", formula: "\\mathrm{E}_{b}^{x}", displayMode: false },
    {
        id: "Exb",
        formula:
            "E_x^b = \\frac{12 \\left(D_{11} D_{22} - D_{12}^2 \\right)}{t^3 D_{22}}",
        displayMode: true,
    },
    {
        id: "Dij",
        formula:
            "D_{ij} = \\sum_{k=1}^N \\left[ \\Phi_{ij} \\right]_k \\left( t_k z_k'^2 + \\frac{t_k^3}{12} \\right), \\; i,j=1,2",
        displayMode: true,
    },
    {
        id: "Phi11",
        formula:
            "\\Phi_{11} = Q_{11} \\cos^4 \\theta + 2 \\left(Q_{12} + 2Q_{66} \\right) \\sin^2 \\theta \\cos^2 \\theta + Q_{22} \\sin^4 \\theta",
        displayMode: true,
    },
    {
        id: "Phi22",
        formula:
            "\\Phi_{22} = Q_{11} \\sin^4 \\theta + 2 \\left(Q_{12} + 2Q_{66} \\right) \\sin^2 \\theta \\cos^2 \\theta + Q_{22} \\cos^4 \\theta",
        displayMode: true,
    },
    {
        id: "Phi12",
        formula:
            "\\Phi_{12} = \\left(Q_{11} + Q_{22} - 4Q_{66} \\right) \\sin^2 \\theta \\cos^2 \\theta + Q_{12} \\left( \\sin^4 \\theta + \\cos^4 \\theta \\right)",
        displayMode: true,
    },
    {
        id: "Q11",
        formula: "Q_{11} = \\frac{E_1}{1 - \\nu_{12}^2 \\frac{E_2}{E_1}}",
        displayMode: true,
    },
    {
        id: "Q22",
        formula: "Q_{22} = \\frac{E_2}{1 - \\nu_{12}^2 \\frac{E_2}{E_1}}",
        displayMode: true,
    },
    {
        id: "Q12",
        formula:
            "Q_{12} = \\frac{\\nu_{12} E_2}{1 - \\nu_{12}^2 \\frac{E_2}{E_1}}",
        displayMode: true,
    },
    { id: "Q66", formula: "Q_{66} = G_{12}", displayMode: true },
    {
        id: "epsilon_y0",
        formula:
            "\\varepsilon_y^0 = -\\frac{\\Delta T}{A_{22}} \\sum_{k=1}^N \\left[ \\Phi_{12}^k \\alpha_x^k + \\Phi_{22}^k \\alpha_y^k + \\Phi_{26}^k \\alpha_{xy}^k \\right] t_k",
        displayMode: true,
    },
    {
        id: "Phi26",
        formula:
            "\\Phi_{26} = \\left(Q_{11} - Q_{12} - 2Q_{66} \\right) \\sin^3 \\theta \\cos \\theta + \\left(Q_{12} - Q_{22} + 2Q_{66} \\right) \\sin \\theta \\cos^3 \\theta",
        displayMode: true,
    },
    {
        id: "alpha_matrix",
        formula:
            "\\left[ \\begin{matrix} \\alpha_x \\\\ \\alpha_y \\\\ \\alpha_{xy} \\end{matrix} \\right] = \\left[ \\begin{matrix} \\cos^2 \\theta & \\sin^2 \\theta & -2 \\cos \\theta \\sin \\theta \\\\ \\sin^2 \\theta & \\cos^2 \\theta & 2 \\cos \\theta \\sin \\theta \\\\ 2 \\cos \\theta \\sin \\theta & -2 \\cos \\theta \\sin \\theta & \\cos^2 \\theta - \\sin^2 \\theta \\end{matrix} \\right]",
        displayMode: true,
    },
    {
        id: "alpha_expanded",
        formula:
            "\\left[ \\begin{matrix} \\alpha_x \\\\ \\alpha_y \\\\ \\alpha_{xy} \\end{matrix} \\right] = \\left[ \\begin{matrix} \\alpha_1 \\cos^2 \\theta + \\alpha_2 \\sin^2 \\theta \\\\ \\alpha_1 \\sin^2 \\theta + \\alpha_2 \\cos^2 \\theta \\\\ 2 \\cos \\theta \\sin \\theta (\\alpha_1 - \\alpha_2) \\end{matrix} \\right]",
        displayMode: "true",
    },

    // Ecuaciones para α_1 y α_2
    {
        id: "alpha1",
        formula:
            "\\alpha_1 = \\frac{\\alpha_A V_f E_A + \\alpha_m V_m E_m}{E_1}",
        displayMode: "true",
    },

    {
        id: "alpha2",
        formula:
            "\\alpha_2 = \\alpha_3 = \\alpha_T \\sqrt{V_f} + (1 - \\sqrt{V_f}) \\left(1 + V_f \\frac{\\nu_m E_A}{E_1} \\right) \\alpha_m",
        displayMode: "true",
    },

    // Ecuación para A_{22}
    {
        id: "A22",
        formula:
            "A_{22} = \\sum_{k=1}^N \\left[ \\left( \\Phi_{22} \\right)_k \\right] t_k",
        displayMode: "true",
    },

    // Fórmula para el momento residual (FEM)
    {
        id: "moment_residual",
        formula:
            "\\text{Momento Residual (FEM)} = \\frac{\\text{deformación experimental}_{\\text{Tabla 4.4}}}{-2 \\times \\left(\\frac{\\text{desplazamiento}_{\\text{Momento unitario (FEM)}}}{3.175}\\right)}",
        displayMode: "true",
    },

    // Fórmula para ε
    {
        id: "epsilon",
        formula:
            "\\varepsilon = \\frac{l - l_0}{l_0} = \\frac{l_0 - 2l^* - l_0}{l_0} = \\frac{-2l^*}{l_0}",
        displayMode: "false",
    },

    // Ecuación para ε_y^0
    {
        id: "epsilon_y0_1",
        formula: "\\varepsilon_y^0",
        displayMode: "false",
    },

    // Ecuación para Φ_{22}
    {
        id: "Phi22_2",
        formula: "\\Phi_{22}^{k}",
        displayMode: "false",
    },

    // Ecuación para Φ_{12}
    {
        id: "Phi12_2",
        formula: "\\Phi_{12}^{k}",
        displayMode: "false",
    },
    // Ecuación para Φ_{26}
    {
        id: "Phi26_2",
        formula: "\\Phi_{26}^{k}",
        displayMode: "false",
  },
];