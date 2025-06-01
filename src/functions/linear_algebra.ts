import type { Complejo } from "../types/general"
import { conjugado, multiplicar } from "./utils"

export function producto_interno_usual (X: Complejo[], Y: Complejo[]): Complejo {
    if(X.length !== Y.length)
        throw new Error("Dimensiones distintas")
    let suma: Complejo = {re: 0, im: 0}
    for(let i = 0; i < X.length; i++){
        let producto = multiplicar(X[i], conjugado(Y[i]))
        suma.re += producto.re
        suma.im += producto.im
    }
    return suma
}

export function norma_usual (X: Complejo[]) {
    return Math.sqrt(producto_interno_usual(X, X).re)
}