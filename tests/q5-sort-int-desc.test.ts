import { describe, it, expect } from 'vitest';
import { sortDigitsDesc } from '../src/q5-sort-int-desc';
// import { sortDigitsDesc } from '../src/q5-sort-digits-desc';

describe('sortDigitsDesc', () => {
    it.each([
        // ตัวอย่างจากโจทย์
        [3008, 8300],
        [1989, 9981],
        [2679, 9762],
        [9163, 9631],
        // กรณีขอบเพิ่ม
        [5, 5],
        [1000, 1000],
        [1111, 1111],
        [1234, 4321],
        [9731, 9731],
    ])('%i -> %i', (input, expected) => {
        expect(sortDigitsDesc(input)).toBe(expected);
    });

    it.todo('0, เลขติดลบ, ทศนิยม: โจทย์รับเฉพาะจำนวนเต็มบวก ตัดสินใจว่าจะทำอย่างไร');
    it.todo('ตัวเลขยาวมากจนผลเกิน Number.MAX_SAFE_INTEGER: ผลลัพธ์ยังถูกไหม');
});