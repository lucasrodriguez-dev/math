export function sign(a: bigint): bigint {
    if(a < 0n)
        return -1n
    return 1n
}

export function abs(a: bigint): bigint {
    return a * sign(a)
}

/**
 * @param a - Dividendo
 * @param b - Divisor (distinto de 0)
 * @returns Resto de división entera de `a` entre `b`. Resultado en intervalo [0, |`b`|).
 * @throws Si `b` es 0 
 */
export function euclideanMod(a: bigint, b: bigint): bigint {
    if(b === 0n)
        throw new Error("El módulo de un número entre cero no está definido")
    const r = a % b
    return r >= 0n ? r : r + abs(b)
}

export function factorExponents(factors: bigint[]): [bigint, number][]{
    const exponents: Map<bigint, number> = new Map()
    for(const factor of factors)
        exponents.set(factor, (exponents.get(factor) || 0) + 1)
    return Array.from(exponents.entries())
}

export function digits(n: bigint): bigint[]{
    if(n < 0n) throw new Error("El número debe ser no negativo")
    return n.toString().split("").map((d) => BigInt(d))
}