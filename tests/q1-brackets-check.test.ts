import { describe, it, expect } from 'vitest';
import { isBalanced } from '../src/q1-brackets-check';

describe('isBalanced', () => {
    it.each([
        /* from docs */
        ['()', true],
        ['([{}])', true],
        ['([]]', false],
        ['([[{}]]]', false],
        [')', false],
        ['(]}])', false],
        ['([)]', false],
        ['{', false],
        /* other case */
        ['()[]{}', true],
        ['{[()]}', true],
        ['((()))', true],
        ['(()', false],
        ['))', false],
        ['((', false],
        ['{[}]', false],
        ['}{', false],
        ['', false],
        ['abc', false],
        ['-', false],
    ])('input %j should return %s', (input, expected) => {
        expect(isBalanced(input)).toBe(expected);
    });

});