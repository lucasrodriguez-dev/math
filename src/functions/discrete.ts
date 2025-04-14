import { abs, euclideanMod, factorExponents, sign, digits } from "./bigint_utils"

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

export function numberOfPositiveDivisors(n: bigint): bigint{
    if(n === 0n || abs(n) === 1n)
        return abs(n)
    const exponents = factorExponents(primeFactors(n)).map(([,exponent]) => BigInt(exponent))
    let result = 1n
    for(let i = 0; i < exponents.length; i++)
        result *= (exponents[i]+1n)
    return result
}

export function congruent(a: bigint, n: bigint): bigint{
    if(n === 0n){
        if(a === 0n)
            return 0n
        return -1n
    }
    return euclideanMod(a,n)
}

export function solveCongruence(a: bigint, b: bigint, n: bigint): {
    hasSolution: boolean,
    solution?: bigint,
    mcd: bigint
}{
    const {hasSolution, x, mcd} = solveDiophantine(a,n,b)
    if(!hasSolution || !x) return {hasSolution: false, mcd: mcd}
    return {
        hasSolution: true,
        solution: euclideanMod(x,n/mcd),
        mcd: mcd
    }
}

export function solveDiophantine(a: bigint, b: bigint, c: bigint): {
    hasSolution: boolean,
    x?: bigint,
    y?: bigint,
    mcd: bigint
}{
    const {mcd, x_a, x_b} = extendedMcd(a,b)
    if(euclideanMod(c,mcd) !== 0n) return { hasSolution: false, mcd: mcd }
    const factor = c/mcd
    return {
        hasSolution: true,
        x: x_a * factor,
        y: x_b * factor,
        mcd: mcd
    }
}

export function changeBase(n: bigint, base: bigint, newBase: bigint): bigint[]{
    if(newBase < 2) throw new Error("La base debe ser mayor o igual que 2")
    if(n === 0n) return [n]
    n = convertToBase10(digits(n), base)
    const newDigits: bigint[] = []
    while(n > 0n){
        newDigits.push(euclideanMod(n, newBase))
        n /= newBase
    }
    return newDigits.reverse()
}

export function convertToBase10(digits: bigint[], base: bigint): bigint{
    if(base < 2) throw new Error("La base debe ser mayor o igual que 2")
    let result = 0n
    for (let i = 0; i < digits.length; i++) {
        const power = BigInt(digits.length - 1 - i)
        result += digits[i] * (base ** power)
    }
    return result
}