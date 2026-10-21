import { describe, it, expect } from 'vitest';
import { sortDigitsDesc } from '../src/q5-sort-int-desc';


describe('sortDigitsDesc', () => {
    it.each([
        // from doc
        [3008, 8300],
        [1989, 9981],
        [2679, 9762],
        [9163, 9631],
        // other cases
        [5, 5],
        [1000, 1000],
        [1111, 1111],
        [1234, 4321],
        [9731, 9731],
        [1234567890, 9876543210],
    ])('%i -> %i', (input, expected) => {
        expect(sortDigitsDesc(input)).toBe(expected);
    });

    // other cases
    it('should throw error for non-positive or negative numbers', () => {
        expect(() => sortDigitsDesc(0)).toThrow('Expected a positive integer, got 0');
        expect(() => sortDigitsDesc(-1)).toThrow('Expected a positive integer, got -1');
        expect(() => sortDigitsDesc(3.14)).toThrow('Expected a positive integer, got 3.14');
        expect(() => sortDigitsDesc(NaN)).toThrow('Expected a positive integer, got NaN');
        expect(() => sortDigitsDesc(Infinity)).toThrow('Expected a positive integer, got Infinity');
    });





});