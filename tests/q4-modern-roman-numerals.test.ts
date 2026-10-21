import { describe, it, expect } from 'vitest';
import { numberToRoman, romanToNumber } from '../src/q4-modern-roman-numerals';


const cases: [number, string][] = [
    [1989, 'MCMLXXXIX'],
    [2000, 'MM'],
    [68, 'LXVIII'],
    [109, 'CIX'],
    [3999, 'MMMCMXCIX'],
    [4, 'IV'],
];

describe('numberToRoman', () => {
    /* from doc */
    it.each(cases)('%i -> %s', (n, roman) => {
        expect(numberToRoman(n)).toBe(roman);
    });
    /* error cases */
    it('should throw error for non-positive integers', () => {
        expect(() => numberToRoman(0)).toThrow('Expected a positive integer, got 0');
        expect(() => numberToRoman(-5)).toThrow('Expected a positive integer, got -5');
        expect(() => numberToRoman(3.14)).toThrow('Expected a positive integer, got 3.14');
    });
});

describe('romanToNumber', () => {
    /* from doc */
    it.each(cases)('%i <- %s', (n, roman) => {
        expect(romanToNumber(roman)).toBe(n);
    });
    /* other cases */
    it('should throw error for invalid Roman numerals', () => {
        expect(() => romanToNumber('')).toThrow('Empty Roman numeral');
        expect(() => romanToNumber('ABCD')).toThrow('Invalid Roman numeral character: "A"');
    });
});


