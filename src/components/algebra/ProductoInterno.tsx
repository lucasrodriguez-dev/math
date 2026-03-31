import React, { useState } from "react";
import type { Complejo } from "../../types/general";
import { producto_interno_usual } from "../../functions/linear_algebra";
import { VectorInput } from "../alphabet/VectorInput";

export function ProductoInterno() {

    const [dimension, setDimension] = useState(1)
  
    const [vectorV, setVectorV] = useState<Complejo[]>(Array.from({ length: dimension }, () => ({ re: 0, im: 0 })))
    const [vectorW, setVectorW] = useState<Complejo[]>(Array.from({ length: dimension }, () => ({ re: 0, im: 0 })))

    const [resultado, setResultado] = useState<Complejo | null>(null)

    const cambiarDimension = (nuevaDimension: number) => {
        setDimension(nuevaDimension)
        setVectorV((prev) => Array.from({ length: nuevaDimension }, (_, i) => prev[i] ?? { re: 0, im: 0 }))
        setVectorW((prev) => Array.from({ length: nuevaDimension }, (_, i) => prev[i] ?? { re: 0, im: 0 }))
    }

  const handleChangeDimension = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevaDimension = Number(e.target.value)
    if(nuevaDimension >= 1)
        cambiarDimension(nuevaDimension)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResultado(producto_interno_usual(vectorV, vectorW))
  }

  return (
    <div className="card-lg">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
            <fieldset>
                Dimensión
                <input type="number" min={1} value={dimension} onChange={handleChangeDimension} className="ml-5 w-24 border-none shadow-none outline-none px-0 text-center"/>
            </fieldset>
            <fieldset className="fieldset_vector">
                <span className="parentesis_vector">ν = </span>
                {VectorInput(vectorV, setVectorV)}
            </fieldset>
            <fieldset className="fieldset_vector">
                <span className="parentesis_vector">ω = </span>
                {VectorInput(vectorW, setVectorW)}
            </fieldset>
            <button className="btn-primary w-fit">Calcular PI usual</button>
        </form>
        <code>
        {
            resultado === null ? "" :
                resultado.im < 0 ? `<ν, ω> = ${resultado.re} ${resultado.im}i` :
                `<ν, ω> = ${resultado.re} + ${resultado.im}i`
        }
        </code>
    </div>
  );
}
