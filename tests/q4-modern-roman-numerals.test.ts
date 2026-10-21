import { describe, it, expect } from 'vitest';
import { fromRoman, toRoman } from '../src/q4-modern-roman-numerals';


const cases: [number, string][] = [
    [1, 'I'], [4, 'IV'], [5, 'V'], [9, 'IX'], [10, 'X'],
    [40, 'XL'], [50, 'L'], [90, 'XC'], [100, 'C'],
    [400, 'CD'], [500, 'D'], [900, 'CM'], [1000, 'M'],
    // ตัวอย่างจากโจทย์
    [68, 'LXVIII'], [109, 'CIX'], [1989, 'MCMLXXXIX'], [2000, 'MM'],
    [3999, 'MMMCMXCIX'],
];

describe('toRoman', () => {
    it.each(cases)('%i -> %s', (n, roman) => {
        expect(toRoman(n)).toBe(roman);
    });
});

describe('fromRoman', () => {
    it.each(cases)('%i <- %s', (n, roman) => {
        expect(fromRoman(roman)).toBe(n);
    });
});

describe('round trip', () => {
    it('fromRoman(toRoman(n)) === n for 1..3999', () => {
        for (let n = 1; n <= 3999; n++) {
            // expect(fromRoman(toRoman(n))).toBe(n);
        }
    });
});

describe('decisions to document', () => {
    it.todo('0, เลขติดลบ, ทศนิยม: throw หรือคืนค่าอะไร');
    it.todo('เลขมากกว่า 3999 (M ซ้ำเกิน 3 ตัว)');
    it.todo('สตริงโรมันไม่ถูกต้อง เช่น "IIII", "IC", "" ');
    it.todo('ตัวพิมพ์เล็ก เช่น "mcm"');
});