import { abs, euclideanMod } from "./bigint_utils"

export function mcd(a: bigint, b: bigint): bigint{
    a = abs(a)
    b = abs(b)
    if(b < a)
        [a,b] = [b,a]
    while(b !== 0n)
        [a,b] = [b, euclideanMod(a,b)]
    return a
}