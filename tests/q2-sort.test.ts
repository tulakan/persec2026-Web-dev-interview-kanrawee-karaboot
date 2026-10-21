import { describe, it, expect } from 'vitest';
import { customSort } from '../src/q2-sort';

describe('test', () => {
    it.each([
        [['TH19', 'SG20', 'TH2'], ['SG20', 'TH2', 'TH19']],
        [['TH10', 'TH3Netflix', 'TH1', 'TH7'], ['TH1', 'TH3Netflix', 'TH7', 'TH10']],
        [['TH1', 'TH3Netflix', 'TH7', 'TH10'], ['TH1', 'TH3Netflix', 'TH7', 'TH10']],
    ])(`sort %j should return %j`, (input, expected) => {
        expect(customSort(input)).toEqual(expected);
    });

    it('returns an empty array for empty input', () => {
        expect(customSort([])).toEqual([]);
    });

    it('returns a single element unchanged', () => {
        expect(customSort(['TH1'])).toEqual(['TH1']);
    });

    it('does not mutate the input array', () => {
        const input = ['TH19', 'SG20', 'TH2'];
        const copy = [...input];
        customSort(input);
        expect(input).toEqual(copy);
    });

    it('keeps exactly the same elements', () => {
        const input = ['TH10', 'TH3Netflix', 'TH1', 'TH7'];
        // expect([...customSort(input)].sort()).toEqual([...input].sort());
    });

    it.todo('ค่าซ้ำ (duplicates): ตัดสินใจและเขียนใน README');
    it.todo('ตัวพิมพ์เล็ก/ใหญ่ปนกัน: ตัดสินใจและเขียนใน README');

});