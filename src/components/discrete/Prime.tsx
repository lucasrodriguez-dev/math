import React, { useState } from 'react'
import { primeFactors } from '../../functions/discrete'
import { factorExponents } from '../../functions/bigint_utils'

export default function Prime() {

    const [n, setN] = useState('')
    const [result, setResult] = useState<bigint[]>([])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setResult(primeFactors(BigInt(n)))
    }

    return (
        <div className='w-fit p-10 flex flex-col gap-5 bg-blue-300 overflow-hidden rounded-md'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input type="number" value={n} placeholder='n' onChange={(e) => setN(e.target.value)} className='border outline-none py-2 px-3 rounded-md w-full'/>
                <button type='submit' className='btn-primary'>Factorizar</button>
            </form>
            <p>
                {
                    result === null ? ""
                    : factorExponents(result).map(([factor, exponent], index) => (
                        <span key={index}>
                            {factor}
                            {exponent > 1 && <sup>{exponent}</sup>}
                            {index < factorExponents(result).length - 1 && ' × '}
                        </span>
                    ))
                }
            </p>
        </div>
    )
}
