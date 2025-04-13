import { abs, euclideanMod, sign } from "./bigint_utils"

export function extendedMcd(a: bigint, b: bigint): {
    mcd: bigint,
    x_a: bigint,
    x_b: bigint
} {
    const {mcd, x_a, x_b} = extendedMcdPositive(abs(a), abs(b))
    return {
        mcd: mcd,
        x_a: x_a*sign(a),
        x_b: x_b*sign(b)
    }
}

export function mcm(a: bigint, b: bigint): bigint{
    if(a === 0n || b === 0n)
        return 0n
    return abs(a*b)/mcd(a,b)
}

export function primeFactors(n: bigint): bigint[]{
    if (n === 0n || n === 1n || n === -1n) return [n]
    n = abs(n)

    const factors: bigint[] = []

    let divisor = 2n
    while (n % divisor === 0n) {
        factors.push(divisor)
        n /= divisor
    }

    divisor = 3n
    while (divisor * divisor <= n) {
        while (n % divisor === 0n) {
            factors.push(divisor)
            n /= divisor
        }
        divisor += 2n
    }

    if (n > 1n) factors.push(n)

    return factors
}

function mcd(a: bigint, b: bigint): bigint{
    a = abs(a)
    b = abs(b)
    if(b < a)
        [a,b] = [b,a]
    while(b !== 0n)
        [a,b] = [b, euclideanMod(a,b)]
    return a
}

function extendedMcdPositive(a: bigint, b: bigint): {
    mcd: bigint,
    x_a: bigint,
    x_b: bigint
}{
    if(b === 0n)
        return {
            mcd: a,
            x_a: 1n,
            x_b: 0n
        }
    const {mcd, x_a, x_b} = extendedMcdPositive(b, euclideanMod(a,b))
    return {
        mcd: mcd,
        x_a: x_b,
        x_b: x_a - (a/b)*x_b
    }
}