import React, { useState } from 'react'
import { congruent } from '../../functions/discrete'

export default function Congruent() {

    const [a, setA] = useState('')
    const [n, setN] = useState('')
    const [usedInputs, setUsedInputs] = useState<{a: string, n: string} | null>(null)
    const [result, setResult] = useState<bigint | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUsedInputs({a,n})
        setResult(congruent(BigInt(a),BigInt(n)))
    }

    return (
        <div className='card'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input type="number" value={a} placeholder='a' onChange={(e) => setA(e.target.value)} className='border outline-none py-2 px-3 rounded-md w-full'/>
                <input type="number" value={n} placeholder='módulo' onChange={(e) => setN(e.target.value)} className='border outline-none py-2 px-3 rounded-md w-full'/>
                <button type='submit' className='btn-primary'>Ver congruencia</button>
            </form>
            <code className='math'>
                {
                    result === null ? ""
                    : result !== -1n ? `${usedInputs?.a} ≡ ${result} (mod ${usedInputs?.n})` : `0 no divide a ${usedInputs?.a}`
                }
            </code>
        </div>
    )
}
