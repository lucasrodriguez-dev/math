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
    return r >= 0n ? r : r + (b > 0n ? b : -b)
}