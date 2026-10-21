import { describe, it, expect } from 'vitest';
import { customSort } from '../src/q2-sort';

describe('Q2 Sort', () => {

    /* from doc */
    it.each([
        [['TH19', 'SG20', 'TH2'], ['SG20', 'TH2', 'TH19']],
        [['TH10', 'TH3Netflix', 'TH1', 'TH7'], ['TH1', 'TH3Netflix', 'TH7', 'TH10']],
        [['TH1', 'TH3Netflix', 'TH7', 'TH10'], ['TH1', 'TH3Netflix', 'TH7', 'TH10']],
    ])(`sort %j should return %j`, (input, expected) => {
        expect(customSort(input)).toEqual(expected);
    });

    /* other case */
    it('return empty array for empty array input', () => {
        expect(customSort([])).toEqual([]);
    });

    it('return a single element if input has only one element', () => {
        expect(customSort(['TH1'])).toEqual(['TH1']);
    });

    it('does not mutate input array', () => {
        const input = ['TH19', 'SG20', 'TH2'];
        const copy = [...input];
        customSort(input);
        expect(input).toEqual(copy);
    });

    it('keep the same elements', () => {
        const input = ['TH10', 'TH3Netflix', 'TH1', 'TH7'];
        expect([...customSort(input)].sort()).toEqual([...input].sort());
    });


    it('return the same number of elements for input with duplicates', () => {
        const input = ['TH10', 'TH3Netflix', 'TH1', 'TH7', 'TH1', 'TH3Netflix'];
        expect(customSort(input)).toHaveLength(input.length);
    });


    it.each([
        [['th19', 'sg20', 'th2'], ['sg20', 'th2', 'th19']],
        [['TH10', 'th3Netflix', 'Th1', 'tH7'], ['Th1', 'th3Netflix', 'tH7', 'TH10']],
        [['tH1', 'Th3Netflix', 'th7', 'TH10'], ['tH1', 'Th3Netflix', 'th7', 'TH10']],
    ])(`sort %j should return %j`, (input, expected) => {
        expect(customSort(input)).toEqual(expected);
    });

});