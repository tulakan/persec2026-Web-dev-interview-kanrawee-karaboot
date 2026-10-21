/* roman convert table */
const ROMAN_STEPS: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];

/* roman:number mapping */
const ROMAN_VALUES: Record<string, number> = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
};

export function numberToRoman(n: number): string {
    /* if not positive integer -> throw error */
    if (!Number.isInteger(n) || n < 1) {
        throw new Error(`Expected a positive integer, got ${n}`);
    }

    let remaining: number = n;
    let result: string = '';

    for (const [value, symbol] of ROMAN_STEPS) {
        while (remaining >= value) {
            result = result + symbol;
            remaining = remaining - value;
        }
    }
    return result;
}


/* get number value of roman numeral and confirm that not undefined  */
function getValue(ch: string): number {
    const value = ROMAN_VALUES[ch];
    if (value === undefined) {
        throw new Error(`Invalid Roman numeral character: "${ch}"`);
    }
    return value;
}

export function romanToNumber(roman: string): number {
    const text = roman.toUpperCase();
    if (text === '') {
        throw new Error('Empty Roman numeral');
    }

    let total = 0;

    for (let i = 0; i < text.length; i++) {
        const current = getValue(text.charAt(i));
        const next = i + 1 < text.length ? getValue(text.charAt(i + 1)) : 0;

        if (current < next) {
            total = total - current;
        } else {
            total = total + current;
        }
    }
    return total;
}