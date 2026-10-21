import { describe, it, expect } from 'vitest';
import { tribonacci } from '../src/q6-tribonacci';

describe('tribonacci', () => {
    it.each([
        // ตัวอย่างจากโจทย์
        [[1, 3, 5], 5, [1, 3, 5, 9, 17]],
        [[2, 2, 2], 3, [2, 2, 2]],
        [[10, 10, 10], 4, [10, 10, 10, 30]],
    ])('start %j, count %i', (start, count, expected) => {
        expect(tribonacci(start, count)).toEqual(expected);
    });

    it('returns an empty array when count is 0', () => {
        expect(tribonacci([1, 1, 1], 0)).toEqual([]);
    });

    it('each term after the third is the sum of the previous three', () => {
        const r = tribonacci([1, 1, 1], 12);
        for (let i = 3; i < r.length; i++) {
            expect(r[i]).toBe(r[i - 1]! + r[i - 2]! + r[i - 3]!);
        }
    });

    it('returns exactly `count` items', () => {
        expect(tribonacci([1, 3, 5], 8)).toHaveLength(8);
    });

    it('does not mutate the start array', () => {
        const start = [1, 3, 5];
        tribonacci(start, 6);
        expect(start).toEqual([1, 3, 5]);
    });

    it.todo('ค่าเริ่มต้นสั้นกว่า 3 ตัว เช่น [] หรือ [1]: ตัดสินใจและเขียนใน README');
    it.todo('count น้อยกว่าจำนวนค่าเริ่มต้น เช่น ([1,3,5], 2)');
});