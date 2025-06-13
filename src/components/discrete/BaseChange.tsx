import React, { useState } from 'react'
import { cambiar_base } from '../../functions/discrete'
import { abs } from '../../functions/bigint_utils'

export default function BaseChange() {

    const [n, setN] = useState('')
    const [nBase, setNBase] = useState('')
    const [newBase, setNewBase] = useState('')
    const [usedInputs, setUsedInputs] = useState<{n: string, nBase: string, newBase: string} | null>(null)
    const [result, setResult] = useState<bigint[] | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUsedInputs({n,nBase,newBase})
        setResult(cambiar_base(BigInt(n), BigInt(nBase), BigInt(newBase)))
    }

    return (
        <div className='card-lg'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input type="number" min={0} value={n} placeholder='número' onChange={(e) => setN(e.target.value)}/>
                <input type="number" min={2} value={nBase} placeholder='base original' onChange={(e) => setNBase(e.target.value)}/>
                <input type="number" min={2} value={newBase} placeholder='nueva base' onChange={(e) => setNewBase(e.target.value)}/>
                <button type='submit' className='btn-primary'>Cambiar de base</button>
            </form>
            <code className='math'>
                {
                    result === null ? ""
                    : <>
                        (<span>{abs(BigInt(usedInputs!.n))}</span>)
                        <sub>{abs(BigInt(usedInputs!.nBase))}</sub>
                        {" = "}
                        (<span>{result.map((d) => d.toString()).join('')}</span>)
                        <sub>{abs(BigInt(usedInputs!.newBase))}</sub>
                    </>
                }
            </code>
        </div>
    )
}
