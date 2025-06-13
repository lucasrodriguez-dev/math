import React, { useState } from 'react'
import { factores_primos_con_multiplicidad } from '../../functions/discrete'
import { factorExponents } from '../../functions/bigint_utils'

export default function Prime() {

    const [n, setN] = useState('')
    const [result, setResult] = useState<bigint[]>([])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setResult(factores_primos_con_multiplicidad(BigInt(n)))
    }

    return (
        <div className='card'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input type="number" min={2} value={n} placeholder='n' onChange={(e) => setN(e.target.value)}/>
                <button type='submit' className='btn-primary'>Factorizar</button>
            </form>
            <code className='math'>
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
            </code>
        </div>
    )
}
