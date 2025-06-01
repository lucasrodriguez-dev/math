import React from 'react'
import { math_symbols } from '../../assets/mathSymbols'

export function MathTable() {
  return (
        <div className='flex flex-row flex-wrap gap-10'>
            {
                math_symbols.map((category) => 
                    <article>
                        <h3>{category.title}</h3>
                        <div className='flex flex-col gap-1'>
                            {
                                category.subcategories.map((subcategory) =>
                                    <ul className='symbol_list'>
                                        {subcategory.symbols.map((someSymbol, index) => 
                                            <li key={index}><button title={someSymbol.name} onClick={() => navigator.clipboard.writeText(someSymbol.letter)}>{someSymbol.letter}</button></li>
                                        )}
                                    </ul>
                                )
                            }
                        </div>
                    </article>
                )
            }
        </div>
  )
}
