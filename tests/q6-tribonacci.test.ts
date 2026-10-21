import { describe, it, expect } from 'vitest';
import { tribonacci } from '../src/q6-tribonacci';

describe('tribonacci', () => {
    it.each([
        // from doc
        [[1, 3, 5], 5, [1, 3, 5, 9, 17]],
        [[2, 2, 2], 3, [2, 2, 2]],
        [[10, 10, 10], 4, [10, 10, 10, 30]],
        /* other cases */
        [[1, 2], 5, [1, 2, 3, 6, 11]],
        [[1, 2], 0, []],
        [[0, 0], 5, [0, 0, 0, 0, 0]],
        [[1], 5, [1, 1, 2, 4, 7]],
        [[], 5, [0, 0, 0, 0, 0]],
        [[1, 1, 1], 12, [1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355]],
    ])('start %j, count %i', (start, count, expected) => {
        expect(tribonacci(start, count)).toEqual(expected);
    });


    it('returns an empty array when count is 0', () => {
        expect(tribonacci([1, 1, 1], 0)).toEqual([]);
    });



});