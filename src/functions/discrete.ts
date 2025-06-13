import { abs, euclideanMod as resto, factorExponents, sign, digits } from "./bigint_utils"

export function phi_de_euler(m: bigint): bigint{
    if(m < 1) throw new Error("m debe ser mayor o igual que 1")
    return m === 1n ? 1n : factores_primos(m).reduce((acc, p) => acc*(p - 1n)/p, m)
}

export function mcd_concoeficientes(a: bigint, b: bigint): {
    mcd: bigint,
    x_a: bigint,
    x_b: bigint
} {
    const {mcd, x_a, x_b} = mcd_concoeficientes_parametrospositivos(abs(a), abs(b))
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
        [a,b] = [b, resto(a,b)]
    return a
}

function mcd_concoeficientes_parametrospositivos(a: bigint, b: bigint): {
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
    const {mcd, x_a, x_b} = mcd_concoeficientes_parametrospositivos(b, resto(a,b))
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

export function factores_primos(n: bigint): bigint[]{
    return [... new Set(factores_primos_con_multiplicidad(n))]
}

export function factores_primos_con_multiplicidad(n: bigint): bigint[]{
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

export function cantidad_divisores_positivos(n: bigint): bigint{
    if(n === 0n || abs(n) === 1n)
        return abs(n)
    const exponents = factorExponents(factores_primos_con_multiplicidad(n)).map(([,exponent]) => BigInt(exponent))
    let result = 1n
    for(let i = 0; i < exponents.length; i++)
        result *= (exponents[i]+1n)
    return result
}

export function congruente(a: bigint, n: bigint): bigint{
    if(n === 0n){
        if(a === 0n)
            return 0n
        return -1n
    }
    return resto(a,n)
}

export function resolver_congruencia(a: bigint, b: bigint, n: bigint): {
    hasSolution: boolean,
    solution?: bigint,
    mcd: bigint
}{
    const {hasSolution, x, mcd} = resolver_diofantica(a,n,b)
    if(!hasSolution || !x) return {hasSolution: false, mcd: mcd}
    return {
        hasSolution: true,
        solution: resto(x,n/mcd),
        mcd: mcd
    }
}

export function resolver_diofantica(a: bigint, b: bigint, c: bigint): {
    hasSolution: boolean,
    x?: bigint,
    y?: bigint,
    mcd: bigint
}{
    const {mcd, x_a, x_b} = mcd_concoeficientes(a,b)
    if(resto(c,mcd) !== 0n) return { hasSolution: false, mcd: mcd }
    const factor = c/mcd
    return {
        hasSolution: true,
        x: x_a * factor,
        y: x_b * factor,
        mcd: mcd
    }
}

export function cambiar_base(n: bigint, base: bigint, newBase: bigint): bigint[]{
    if(newBase < 2) throw new Error("La base debe ser mayor o igual que 2")
    if(n === 0n) return [n]
    n = convertir_a_base10(digits(n), base)
    const newDigits: bigint[] = []
    while(n > 0n){
        newDigits.push(resto(n, newBase))
        n /= newBase
    }
    return newDigits.reverse()
}

export function convertir_a_base10(digits: bigint[], base: bigint): bigint{
    if(base < 2) throw new Error("La base debe ser mayor o igual que 2")
    let result = 0n
    for (let i = 0; i < digits.length; i++) {
        const power = BigInt(digits.length - 1 - i)
        result += digits[i] * (base ** power)
    }
    return result
}