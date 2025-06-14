import type { MathSymbolCategory } from "../types/general";

export const math_symbols: MathSymbolCategory[] = [
    {
        title: "letras griegas",
        subcategories: [
            {
                subtitle: "mayúscula",
                symbols: [
                    {letter: "Α", name: "Alfa"},
                    {letter: "Β", name: "Beta"},
                    {letter: "Γ", name: "Gamma"},
                    {letter: "Δ", name: "Delta"},
                    {letter: "Ε", name: "Épsilon"},
                    {letter: "Ζ", name: "Dseta"},
                    {letter: "Η", name: "Eta"},
                    {letter: "Θ", name: "Zeta"},
                    {letter: "Ι", name: "Iota"},
                    {letter: "Κ", name: "Kappa"},
                    {letter: "Λ", name: "Lambda"},
                    {letter: "Μ", name: "Mi"},
                    {letter: "Ν", name: "Ni"},
                    {letter: "Ξ", name: "Xi"},
                    {letter: "Ο", name: "Ómicron"},
                    {letter: "Π", name: "Pi"},
                    {letter: "Ρ", name: "Ro"},
                    {letter: "Σ", name: "Sigma"},
                    {letter: "Τ", name: "Tau"},
                    {letter: "Υ", name: "Ípsilon"},
                    {letter: "Φ", name: "Fi"},
                    {letter: "Χ", name: "Ji"},
                    {letter: "Ψ", name: "Psi"},
                    {letter: "Ω", name: "Omega"}
                ]
            },
            {
                subtitle: "minúscula",
                symbols: [
                    {letter: "α", name: "alfa"},
                    {letter: "β", name: "beta"},
                    {letter: "γ", name: "gamma"},
                    {letter: "δ", name: "delta"},
                    {letter: "ε", name: "épsilon"},
                    {letter: "ζ", name: "dseta"},
                    {letter: "η", name: "eta"},
                    {letter: "θ", name: "zeta"},
                    {letter: "ι", name: "iota"},
                    {letter: "κ", name: "kappa"},
                    {letter: "λ", name: "lambda"},
                    {letter: "μ", name: "mi"},
                    {letter: "ν", name: "ni"},
                    {letter: "ξ", name: "xi"},
                    {letter: "ο", name: "ómicron"},
                    {letter: "π", name: "pi"},
                    {letter: "ρ", name: "ro"},
                    {letter: "σ", name: "sigma"},
                    {letter: "ς", name: "sigma"},
                    {letter: "τ", name: "tau"},
                    {letter: "υ", name: "ípsilon"},
                    {letter: "φ", name: "fi"},
                    {letter: "χ", name: "ji"},
                    {letter: "ψ", name: "psi"},
                    {letter: "ω", name: "omega"}
                ]
            }
        ]
    },
    {
        title: "conjuntos numéricos",
        subcategories: [
            {
                subtitle: "números",
                symbols: [
                    {letter: "ℕ", name: "naturales"},
                    {letter: "ℤ", name: "enteros"},
                    {letter: "ℚ", name: "racionales"},
                    {letter: "ℝ", name: "reales"},
                    {letter: "ℂ", name: "complejos"}
                ]
            },
            {
                subtitle: "constantes",
                symbols: [
                    {letter: "π", name: "pi"},
                    {letter: "e", name: "número de Euler"},
                    {letter: "i", name: "unidad imaginaria"}
                ]
            }
        ]
    },
    {
        title: "operadores lógicos",
        subcategories: [
            {
                subtitle: "conectivos",
                symbols: [
                    {letter: "⊥", name: "bottom/absurdo/contradicción"},
                    {letter: "¬", name: "negación/not"},
                    {letter: "∧", name: "conjunción/and/y"},
                    {letter: "∨", name: "disyunción/or/o"},
                    {letter: "→", name: "implica/then/entonces"},
                    {letter: "↔", name: "si y solo si/iff/sii"}
                ]
            },
            {
                subtitle: "cuantificadores",
                symbols: [
                    {letter: "∀", name: "para todo"},
                    {letter: "∃", name: "existe"},
                    {letter: "∄", name: "no existe"},
                    {letter: "∴", name: "por lo tanto"},
                    {letter: "∵", name: "porque"}
                ]
            }
        ]
    },
    {
        title: "operadores aritméticos",
        subcategories: [
            {
                subtitle: "básicos",
                symbols: [
                    {letter: "+", name: "más"},
                    {letter: "-", name: "menos"},
                    {letter: "±", name: "más – menos"},
                    {letter: "×", name: "por"},
                    {letter: "/", name: "barra"},
                    {letter: "%", name: "módulo"}
                ]
            },
            {
                subtitle: "potencias y raíces",
                symbols: [
                    {letter: "⁻¹", name: "inverso"},
                    {letter: "ⁿ", name: "a la n"},
                    {letter: "²", name: "al cuadrado"},
                    {letter: "³", name: "al cubo"},
                    {letter: "√", name: "raíz cuadrada"},
                    {letter: "∛", name: "raíz cúbica"},
                    {letter: "^", name: "potencia"}
                ]
            }
        ]
    },
    {
        title: "operadores relacionales",
        subcategories: [
            {
                subtitle: "comparaciones simples",
                symbols: [
                    {letter: "=", name: "igual"},
                    {letter: "≠", name: "distinto"},
                    {letter: "<", name: "menor"},
                    {letter: ">", name: "mayor"},
                    {letter: "≤", name: "menor o igual"},
                    {letter: "≥", name: "mayor o igual"}
                ]
            },
            {
                subtitle: "comparaciones extendidas",
                symbols: [
                    {letter: "≪", name: "mucho menor"},
                    {letter: "≫", name: "mucho mayor"},
                    {letter: "≈", name: "aproximadamente"},
                    {letter: "∝", name: "proporcional"}
                ]
            },
            {
                subtitle: "igualdades especiales",
                symbols: [
                    {letter: "≡", name: "congruente"},
                    {letter: "≢", name: "no congruente"},
                    {letter: "≅", name: "isomorfo"},
                    {letter: "≃", name: "equivalente aproximadamente/isomorfo"}
                ]
            }
        ]
    },
    {
        title: "teoría de conjuntos",
        subcategories: [
            {
                subtitle: "pertenencia",
                symbols: [
                    {letter: "∈", name: "pertenece"},
                    {letter: "∉", name: "no pertenece"}
                ]
            },
            {
                subtitle: "inclusión",
                symbols: [
                    {letter: "⊂", name: "contenido"},
                    {letter: "⊊", name: "contenido estricto"},
                    {letter: "⊃", name: "contiene"},
                    {letter: "⊋", name: "contiene estricto"},
                    {letter: "⊆", name: "contenido o igual"},
                    {letter: "⊇", name: "contiene o igual"},
                    {letter: "⊄", name: "no contenido"}
                ]
            },
            {
                subtitle: "operaciones",
                symbols: [
                    {letter: "∅", name: "conjunto vacío"},
                    {letter: "∪", name: "unión"},
                    {letter: "∩", name: "intersección"},
                    {letter: "⋃", name: "unión de familia"}, 
                    {letter: "⋂", name: "intersección de familia"},
                    {letter: "∖", name: "diferencia"},
                    {letter: "∁", name: "complemento"},
                    {letter: "𝒫", name: "conjunto potencia"}
                ]
            }
        ]
    },
    {
        title: "cálculo",
        subcategories: [
        {
            subtitle: "sumatoria y productoria",
            symbols: [
            {letter: "∑", name: "sumatoria"},
            {letter: "∏", name: "productoria"}
            ]
        },
        {
            subtitle: "derivadas e integrales",
            symbols: [
            {letter: "′", name: "derivada/prima"},
            {letter: "∫", name: "integral"},
            {letter: "∬", name: "doble integral"},
            {letter: "∂", name: "derivada parcial"}
            ]
        },
        {
            subtitle: "factores y divisibilidad",
            symbols: [
            {letter: "∣", name: "divide"},
            {letter: "∤", name: "no divide"}
            ]
        },
        {
            subtitle: "límites",
            symbols: [
            {letter: "∞", name: "infinito"},
            {letter: "lim", name: "límite"}
            ]
        },
        ]
    },
    {
        title: "álgebra lineal",
        subcategories: [
        {
            subtitle: "matrices y operaciones vectoriales",
            symbols: [
                    {letter: "𝐼", name: "matriz identidad"},
                    {letter: "𝟎", name: "matriz nula"},
                    {letter: "𝑀ₙ", name: "matrices de nxn"},
                    {letter: "·", name: "producto escalar"},
                    {letter: "×", name: "producto vectorial"},
                    {letter: "⟨⟩", name: "producto interno"},
                    {letter: "∥∥", name: "norma"},
                    {letter: "⊕", name: "suma directa"},
                    {letter: "ᵗ", name: "traspuesta"}
            ]
        }
        ]
    }
]