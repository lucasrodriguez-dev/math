import React, { useState } from 'react'
import { resolver_congruencia } from '../../functions/discrete'

export default function CongruentEcuation() {

    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [n, setN] = useState('')
    const [usedInputs, setUsedInputs] = useState<{a: string, b: string, n: string} | null>(null)
    const [result, setResult] = useState<{hasSolution: boolean, solution?: bigint, mcd: bigint} | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUsedInputs({a,b,n})
        setResult(resolver_congruencia(BigInt(a),BigInt(b),BigInt(n)))
    }

    return (
        <div className='card-lg'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input type="number" value={a} placeholder='a' onChange={(e) => setA(e.target.value)}/>
                <input type="number" value={b} placeholder='b' onChange={(e) => setB(e.target.value)}/>
                <input type="number" value={n} placeholder='módulo' onChange={(e) => setN(e.target.value)}/>
                <button type='submit' className='btn-primary'>Hallar x</button>
            </form>
            <code className='math'>
                {
                    result === null ? ""
                    : !result.hasSolution ? "No hay soluciones"
                    : (
                    <>
                        {`${usedInputs?.a}x ≡ ${usedInputs?.b} (mod ${usedInputs?.n})`}
                        <br />
                        {`x = ${result.solution} + ${usedInputs?.n}k`}
                    </>
                    ) 
                }
            </code>
        </div>
    )
}
