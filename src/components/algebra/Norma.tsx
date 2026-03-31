import React, { useState } from 'react'
import type { Complejo } from '../../types/general'
import { norma_usual, producto_interno_usual } from '../../functions/linear_algebra'
import { VectorInput } from '../alphabet/VectorInput'

export function Norma() {

  const [dimension, setDimension] = useState(1)
  const [vector, setVector] = useState<Complejo[]>(Array.from({ length: dimension }, () => ({ re: 0, im: 0 })))
  const [resultado, setResultado] = useState<string | null>(null)

    const cambiarDimension = (nuevaDimension: number) => {
        setDimension(nuevaDimension)
        setVector((prev) => Array.from({ length: nuevaDimension }, (_, i) => prev[i] ?? { re: 0, im: 0 }))
    }

    const handleChangeDimension = (e: React.ChangeEvent<HTMLInputElement>) => {
      const nuevaDimension = Number(e.target.value)
      if(nuevaDimension >= 1)
          cambiarDimension(nuevaDimension)
    }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const producto_interno = producto_interno_usual(vector, vector).re
    if(Number.isInteger(Math.sqrt(producto_interno)))
        setResultado(`${Math.sqrt(producto_interno)}`)
    else
        setResultado(`√${producto_interno}`)
  }

  return (
    <div className='card'>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
            <fieldset>
                Dimensión
                <input type="number" min={1} value={dimension} onChange={handleChangeDimension} className="ml-5 w-24 border-none shadow-none outline-none px-0 text-center"/>
            </fieldset>
            <fieldset className="fieldset_vector">
                <span className="parentesis_vector">ν = </span>
                {VectorInput(vector, setVector)}
            </fieldset>
            <button className="btn-primary w-fit">Calcular Norma usual</button>
        </form>
        <code>
        {
            resultado === null ? "" : `∥ν∥ = ${resultado}`
        }
        </code>
    </div>
  )
}