import { describe, it, expect } from 'vitest';
import { sortDigitsDesc } from '../src/q5-sort-int-desc';
// import { sortDigitsDesc } from '../src/q5-sort-digits-desc';

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
    ])('%i -> %i', (input, expected) => {
        expect(sortDigitsDesc(input)).toBe(expected);
    });

    it('should throw error for non-integer or negative numbers', () => {
        expect(() => sortDigitsDesc(-1)).toThrow('Expected a non-negative integer, got -1');
        expect(() => sortDigitsDesc(3.14)).toThrow('Expected a non-negative integer, got 3.14');
    });


});