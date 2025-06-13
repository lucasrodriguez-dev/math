import React, { useState } from 'react'
import { mcd_concoeficientes } from '../../functions/discrete'

export default function MCD() {

    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [usedInputs, setUsedInputs] = useState<{a: string, b: string} | null>(null)
    const [result, setResult] = useState<{
        mcd: bigint,
        x_a: bigint,
        x_b: bigint
    } | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUsedInputs({a,b})
        setResult(mcd_concoeficientes(BigInt(a),BigInt(b)))
    }

    return (
        <div className='card'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input type="number" value={a} placeholder='a' onChange={(e) => setA(e.target.value)}/>
                <input type="number" value={b} placeholder='b' onChange={(e) => setB(e.target.value)}/>
                <button type='submit' className='btn-primary'>Calcular MCD</button>
            </form>
            <code className='math'>
                {
                    result === null ? ""
                    : (
                        <>
                        {`mcd(${usedInputs?.a}, ${usedInputs?.b})`}
                        <br />
                        {`= ${usedInputs?.a}(${result.x_a}) + ${usedInputs?.b}(${result.x_b})`}
                        <br />
                        {`= ${result.mcd}`}
                        </>
                    )
                }
            </code>
        </div>
    )
}