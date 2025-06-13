import React, { useState } from 'react'
import { resolver_diofantica } from '../../functions/discrete'

export default function Diophantine() {

    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [c, setC] = useState('')
    const [usedInputs, setUsedInputs] = useState<{a: string, b: string, c: string} | null>(null)
    const [result, setResult] = useState<{hasSolution: boolean, x?: bigint, y?: bigint, mcd: bigint} | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUsedInputs({ a, b, c })
        setResult(resolver_diofantica(BigInt(a),BigInt(b),BigInt(c)))
    }

    return (
        <div className='card-lg'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input type="number" value={a} placeholder='a' onChange={(e) => setA(e.target.value)}/>
                <input type="number" value={b} placeholder='b' onChange={(e) => setB(e.target.value)}/>
                <input type="number" value={c} placeholder='c' onChange={(e) => setC(e.target.value)}/>
                <button type='submit' className='btn-primary'>Hallar (x, y)</button>
            </form>
            <code className='math'>
                {
                    result === null ? ""
                        : !result.hasSolution ? "No hay soluciones"
                            : (
                                <>
                                    {`${usedInputs?.a}x + ${usedInputs?.b}y = ${usedInputs?.c}`}
                                    <br />
                                    {`(x, y) = (${result.x} + ${BigInt(usedInputs!.b)/result.mcd}k, ${result.y} - ${BigInt(usedInputs!.a)/result.mcd}k)`}
                                </>
                            )
                }
            </code>
        </div>
    )
}
