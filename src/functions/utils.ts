import type { complejo } from "../types/general";

export function conjugado (z: complejo): complejo {
    return { re: z.re, im: -z.im }
}

export function multiplicar (z: complejo, w: complejo): complejo {
    return {
        re: z.re*w.re - z.im*w.im,
        im: z.re*w.im + z.im*w.re
    }
}