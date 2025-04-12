import React, { useState } from 'react'
import { mcd } from '../../functions/discrete'

export default function MCD() {

    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [result, setResult] = useState<bigint | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setResult(mcd(BigInt(a), BigInt(b)))
    }

    return (
        <div className='w-fit p-10 flex flex-col gap-5 bg-blue-300 overflow-hidden rounded-md'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input type="number" value={a} placeholder='a' onChange={(e) => setA(e.target.value)} className='border outline-none py-2 px-3 rounded-md w-full'/>
                <input type="number" value={b} placeholder='b' onChange={(e) => setB(e.target.value)} className='border outline-none py-2 px-3 rounded-md w-full'/>
                <button type='submit' className='btn-primary'>Calcular MCD</button>
            </form>
            <p>
                {
                    result !== null ? result
                    : ""
                }
            </p>
        </div>
    )
}