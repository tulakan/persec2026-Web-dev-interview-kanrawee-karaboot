import { describe, it, expect } from 'vitest';
import { autocomplete } from '../src/q3-autocomplete';

const items = ['Mother', 'Think', 'Worthy', 'Apple', 'Android'];


describe('autocomplete', () => {
    /* from doc */
    it('matches the example from the task', () => {
        expect(autocomplete('th', items, 2)).toEqual(['Think', 'Mother']);
    });

    it('ignores case in the search term', () => {
        expect(autocomplete('TH', items, 2)).toEqual(autocomplete('th', items, 2));
    });

    /* other case */
    it('returns all matches when maxResult is larger than the match count', () => {
        expect(autocomplete('th', items, 10)).toHaveLength(3);
    });

    it('never returns more than maxResult', () => {
        expect(autocomplete('th', items, 1).length).toBeLessThanOrEqual(1);
    });

    it('returns an empty array when nothing matches', () => {
        expect(autocomplete('zzz', items, 5)).toEqual([]);
    });

    it('returns an empty array when maxResult is 0', () => {
        expect(autocomplete('th', items, 0)).toEqual([]);
    });

    it('returns an empty array when items is empty', () => {
        expect(autocomplete('th', [], 5)).toEqual([]);
    });

    it('only returns items that contain the search term', () => {
        for (const r of autocomplete('an', items, 10)) {
            expect(r.toLowerCase()).toContain('an');
        }
    });

    it('returns an empty array when search is empty', () => {
        expect(autocomplete('', items, 5)).toEqual([]);
    });

    it('keeps the original order for items in the same group', () => {
        const apItems = ['apple', 'apricot', 'apex'];   // ไม่ได้เรียงตามตัวอักษร
        expect(autocomplete('ap', apItems, 10)).toEqual(['apple', 'apricot', 'apex']);
    });

    it('sorts results by match position', () => {
        const items = ['bath', 'Worthy', 'Think'];
        expect(autocomplete('th', items, 10)).toEqual(['Think', 'Worthy', 'bath']);
    });
});