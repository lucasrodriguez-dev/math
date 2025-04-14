import React, { useState } from 'react'
import { mcm } from '../../functions/discrete'

export default function MCD() {

    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [usedInputs, setUsedInputs] = useState<{a: string, b: string} | null>(null)
    const [result, setResult] = useState<bigint | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUsedInputs({a,b})
        setResult(mcm(BigInt(a),BigInt(b)))
    }

    return (
        <div className='card'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input type="number" value={a} placeholder='a' onChange={(e) => setA(e.target.value)}/>
                <input type="number" value={b} placeholder='b' onChange={(e) => setB(e.target.value)}/>
                <button type='submit' className='btn-primary'>Calcular MCM</button>
            </form>
            <code className='math'>
                {
                    result === null ? ""
                    : `mcm(${usedInputs?.a}, ${usedInputs?.b}) = ${result}`
                }
            </code>
        </div>
    )
}