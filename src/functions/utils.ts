import type { Complejo } from "../types/general";

export function conjugado (z: Complejo): Complejo {
    return { re: z.re, im: -z.im }
}

export function multiplicar (z: Complejo, w: Complejo): Complejo {
    return {
        re: z.re*w.re - z.im*w.im,
        im: z.re*w.im + z.im*w.re
    }
}