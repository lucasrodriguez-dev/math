export function vectorModule([a,b]: [number, number]): number{
    return Math.sqrt(a*a + b*b)
}

export function fromVectorToBinomic([re, im]: [number, number]): string{
    const sign = im >= 0 ? "+" : "-"
    return `${re.toFixed(2)} ${sign} ${Math.abs(im).toFixed(2)}i`
}

export function fromVectorToPolar([re, im]: [number, number]): string{
    const r = vectorModule([re,im])
    const theta = formatThetaAsPiFraction(Math.atan2(im,re))
    return `${r.toFixed(2)}(${theta})`
}

export function formatThetaAsPiFraction(theta: number, tolerance: number = 0.01): string{
    const pi = Math.PI
    const maxDenominator = 24
    for (let denom = 1; denom <= maxDenominator; denom++) {
        const num = Math.round((theta / pi) * denom);
        const approx = (num / denom) * pi;
        if (Math.abs(approx - theta) < tolerance) {
            if (num === 0) return "0";
            if (denom === 1) return `${num}π`;
            if (num === 1) return `π/${denom}`;
            return `${num}π/${denom}`;
        }
    }
    const raw = (theta / pi).toFixed(3);
    return `${raw}π`;
}

export function parseComplex(value: string): [number, number] | null{
    const binomicRegex = /^\s*(-?\d+(?:\.\d+)?)\s*([+-])\s*(\d+(?:\.\d+)?)i\s*$/i
    const polarDegRegex = /^\s*(\d+(?:\.\d+)?)\s*∠\s*(-?\d+(?:\.\d+)?)\s*$/i
    const polarRadRegex = /^\s*(\d+(?:\.\d+)?)\s*\(\s*(-?\d+(?:\.\d+)?(?:π)?)\s*\)\s*$/i

    const binomicMatch = value.match(binomicRegex)
    if(binomicMatch){
        const re = parseFloat(binomicMatch[1])
        const sign = binomicMatch[2] === "-" ? -1 : 1
        const im = parseFloat(binomicMatch[3]) * sign
        return [re, im]
    }

    const polarRadMatch = value.match(polarRadRegex)
    if(polarRadMatch){
        const r = parseFloat(polarRadMatch[1])
        const thetaRaw = polarRadMatch[2]
        let theta: number
        if(thetaRaw.includes("π")){
            const parts = thetaRaw.split("π")
            const coef = parts[0] === "" ? 1 : parseFloat(parts[0])
            theta = coef*Math.PI
        } else theta = parseFloat(thetaRaw)
        return [r * Math.cos(theta), r * Math.sin(theta)]
    }

    return null
}

export function convertComplex([re, im]: [number, number], newNotation: "binomic" | "polar"): string{
    if(newNotation === "binomic")
        return fromVectorToBinomic([re, im])
    if(newNotation === "polar")
        return fromVectorToPolar([re, im])
    return "Notación desconocida"
}