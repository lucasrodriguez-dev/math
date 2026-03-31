import React from 'react'
import type { Complejo } from '../../types/general'

export const VectorInput = (vector: Complejo[], setVector: (v: Complejo[]) => void) => {
  return (
    <>
        <span className="parentesis_vector">(</span>
        {
            vector.map((valor, indice) => (
                <span key={indice} className="coordenada_vector">
                    <input type="number" value={valor.re} 
                        onChange={(e) => {
                            const nuevo = [...vector]
                            nuevo[indice].re = Number(e.target.value)
                            setVector(nuevo)
                        }}
                        className="input_vector"
                        size={Math.max(valor.re.toString().length, 1)} />
                    +
                    <input type="number" value={valor.im} 
                        onChange={(e) => {
                            const nuevo = [...vector]
                            nuevo[indice].im = Number(e.target.value)
                            setVector(nuevo)
                        }}
                        className="input_vector"
                        size={Math.max(valor.im.toString().length, 1)} />
                    i
                    {indice < vector.length - 1 ? ',' : ''}
                </span>
            ))
        }
        <span className="parentesis_vector">)</span>
    </>
  )
}