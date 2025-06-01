export type Complejo = {
    re: number,
    im: number
}

export type MathSymbolCategory = {
    title: string,
    subcategories: MathSymbolSubCategory[]
}

export type MathSymbolSubCategory = {
    subtitle: string,
    symbols: MathSymbol[]
}

export type MathSymbol = {
    letter: string,
    name: string
}