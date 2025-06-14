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

export const getLastWord = (text: string) => text.trim().split(/\s+/).pop() || "";

const normalizeText = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export const includesText = (text: string, input: string) => {
    return normalizeText(text).toLowerCase().includes(normalizeText(input).toLowerCase())
}

export const replaceLastWord = (text: string, newLastWord: string) => {
    const words = text.trim().split(/\s+/);
    words.pop();
    words.push(newLastWord);
    return words;
}

export function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref && typeof ref === 'object' && 'current' in ref) {
        (ref as React.MutableRefObject<T>).current = node;
      }
    }
  };
}