import React, { useState } from 'react'
import { numberOfPositiveDivisors } from '../../functions/discrete'

export default function Divisors() {

    const [n, setN] = useState('')
    const [result, setResult] = useState<bigint | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setResult(numberOfPositiveDivisors(BigInt(n)))
    }

    return (
        <div className='card'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input type="number" value={n} placeholder='n' onChange={(e) => setN(e.target.value)} className='border outline-none py-2 px-3 rounded-md w-full'/>
                <button type='submit' className='btn-primary'>Calcular cantidad</button>
            </form>
            <code className='math'>
                {
                    result === null ? ""
                    : result !== 0n ? result : "∞"
                }
            </code>
        </div>
    )
}
