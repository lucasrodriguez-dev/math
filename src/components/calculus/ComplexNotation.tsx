import React, { useState } from 'react'
import { convertComplex, parseComplex } from '../../functions/calculus'

export default function ComplexNotation() {

    const [input, setInput] = useState("")
    const [newNotation, setNewNotation] = useState<"binomic" | "polar">("binomic")
    const [result, setResult] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const complex = parseComplex(input)
        if(!complex)
            setResult("Formato no reconocido")
        else
            setResult(convertComplex(complex, newNotation))
    }

    return (
        <div className='card'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input type="text" value={input} placeholder='Número complejo' onChange={(e) => setInput(e.target.value)} />
                <select id="" value={newNotation} onChange={(e) => setNewNotation(e.target.value as "binomic" | "polar")}>
                    <option value="binomic">Binómica</option>
                    <option value="polar">Polar</option>
                </select>
                <button type="submit" className='btn-primary'>Cambiar notación</button>
            </form>
            <code className='math'>
                {result}
            </code>
        </div>
    )
}
