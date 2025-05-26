import React from 'react'

const upperCaseGreekLetters = [["Α", "Alfa"], ["Β", "Beta"], ["Γ", "Gamma"], ["Δ", "Delta"], ["Ε", "Épsilon"], ["Ζ", "Dseta"], ["Η", "Eta"], ["Θ", "Zeta"], ["Ι", "Iota"], ["Κ", "Kappa"], ["Λ", "Lambda"], ["Μ", "Mi"], ["Ν", "Ni"], ["Ξ", "Xi"], ["Ο", "Ómicron"], ["Π", "Pi"], ["Ρ", "Ro"], ["Σ", "Sigma"], ["Τ", "Tau"], ["Υ", "Ípsilon"], ["Φ", "Fi"], ["Χ", "Ji"], ["Ψ", "Psi"], ["Ω", "Omega"]]
const lowerCaseGreekLetters = [["α", "alfa"], ["β", "beta"], ["γ", "gamma"], ["δ", "delta"], ["ε", "épsilon"], ["ζ", "dseta"], ["η", "eta"], ["θ", "zeta"], ["ι", "iota"], ["κ", "kappa"], ["λ", "lambda"], ["μ", "mi"], ["ν", "ni"], ["ξ", "xi"], ["ο", "ómicron"], ["π", "pi"], ["ρ", "ro"], ["σ", "sigma"], ["ς", "sigma"], ["τ", "tau"], ["υ", "ípsilon"], ["φ", "fi"], ["χ", "ji"], ["ψ", "psi"], ["ω", "omega"]]

const logicSymbols = [["⊥", "bottom"], ["¬", "not"], ["→", "then"], ["↔", "iff"], ["∧", "and"], ["∨", "or"], ["∀", "para todo"], ["∃", "existe"]]

const arithmeticSymbols = [["+", "más"], ["-", "menos"], ["±", "más – menos"], ["×", "por"], ["/", "barra"], ["%", "módulo"], ["ⁿ", "a la n"], ["²", "al cuadrado"], ["³", "al cubo"], ["√", "raíz cuadrada"], ["∛", "raíz cúbica"], ["=", "igual"], ["≠", "distinto"], ["<", "menor"], [">", "mayor"], ["≤", "menor o igual"], ["≥", "mayor o igual"], ["≪", "mucho menor"], ["≫", "mucho mayor"], ["∞", "infinito"], ["∫", "integral"], ["∑", "sumatoria"], ["∏", "productoria"], ["∣", "divide"], ["∤", "no divide"], ["≡", "congruente"], ["≢", "no congruente"]]

const setSymbols = [["∅", "conjunto vacío"], ["{}", "conjunto"], ["∁", "complemento"], ["⊂", "contenido estricto"], ["⊆", "contenido"], ["⊃", "contiene estricto"], ["⊇", "contiene"], ["∪", "unión"], ["∩", "intersección"], ["∖", "diferencia"], ["⋃", "unión de familia"], ["⋂", "intersección de familia"], ["∈", "pertenece"], ["∉", "no pertenece"], ["∃", "existe"], ["∄", "no existe"]]

const algebraSymbols = [["⟨⟩", "producto interno"], ["∥∥", "norma"], ["⊕", "suma directa"], ["ᵗ", "traspuesta"]]

const numericSetsSymbols = [["ℂ", "complejos"], ["ℝ", "reales"], ["ℚ", "racionales"], ["ℤ", "enteros"], ["ℕ", "naturales"]]

export function MathTable() {
  return (
        <div className='flex flex-col gap-10'>
            <article>
                <h3>Letras griegas</h3>
                <ul className='symbol_list mb-3'>
                    {upperCaseGreekLetters.map((letter, index) => 
                        <li key={index}>
                            <button title={letter[1]} onClick={() => navigator.clipboard.writeText(letter[0])}>
                                {letter[0]}
                            </button>
                        </li>
                    )}
                </ul>
                <ul className='symbol_list'>
                    {lowerCaseGreekLetters.map((letter, index) => 
                        <li key={index}>
                            <button title={letter[1]} onClick={() => navigator.clipboard.writeText(letter[0])}>
                                    {letter[0]}
                            </button>
                        </li>
                    )}
                </ul>
            </article>
            <article>
                <h3>Aritmética</h3>
                    <div>
                        <ul className='symbol_list'>
                            {arithmeticSymbols.map((letter, index) => 
                                <li key={index}>
                                    <button title={letter[1]} onClick={() => navigator.clipboard.writeText(letter[0])}>
                                        {letter[0]}
                                    </button>
                                </li>
                            )}
                        </ul>
                </div>
            </article>
            <article>
                <h3>Teoría de conjuntos</h3>
                    <div>
                        <ul className='symbol_list'>
                            {setSymbols.map((letter, index) => 
                                <li key={index}>
                                    <button title={letter[1]} onClick={() => navigator.clipboard.writeText(letter[0])}>
                                        {letter[0]}
                                    </button>
                                </li>
                            )}
                        </ul>
                </div>
            </article>
            <article>
                <h3>Lógica</h3>
                <div>
                    <ul className='symbol_list'>
                        {logicSymbols.map((letter, index) => 
                            <li key={index}>
                                <button title={letter[1]} onClick={() => navigator.clipboard.writeText(letter[0])}>
                                    {letter[0]}
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </article>
            <article>
                <h3>Conjuntos numéricos</h3>
                    <div>
                        <ul className='symbol_list'>
                            {numericSetsSymbols.map((letter, index) => 
                                <li key={index}>
                                    <button title={letter[1]} onClick={() => navigator.clipboard.writeText(letter[0])}>
                                        {letter[0]}
                                    </button>
                                </li>
                            )}
                        </ul>
                </div>
            </article>
            <article>
                <h3>Álgebra</h3>
                    <div>
                        <ul className='symbol_list'>
                            {algebraSymbols.map((letter, index) => 
                                <li key={index}>
                                    <button title={letter[1]} onClick={() => navigator.clipboard.writeText(letter[0])}>
                                        {letter[0]}
                                    </button>
                                </li>
                            )}
                        </ul>
                </div>
            </article>
        </div>
  )
}