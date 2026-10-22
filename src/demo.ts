import { isBalanced } from './q1-brackets-check';
import { customSort } from './q2-sort';
import { autocomplete } from './q3-autocomplete';
import { numberToRoman, romanToNumber } from './q4-modern-roman-numerals';
import { sortDigitsDesc } from './q5-sort-int-desc';
import { tribonacci } from './q6-tribonacci';

console.log(`isBalanced('()') = ${isBalanced('()')}`);
console.log(`customSort(['TH10', "TH3Netflix" , "TH1", "TH7"]) = ${customSort(["TH10", "TH3Netflix", "TH1", "TH7"])}`);
console.log(`autocomplete(“th”, [“Mother“, “Think”, “Worthy”, “Apple”, “Android”], 2) = ${autocomplete('th', ['Mother', 'Think', 'Worthy', 'Apple', 'Android'], 2)}`);
console.log(`numberToRoman(1989) = ${numberToRoman(1989)}`);
console.log(`romanToNumber('LXVIII') = ${romanToNumber('LXVIII')}`);
console.log(`sortDigitsDesc(2679) = ${sortDigitsDesc(2679)}`);
console.log(`tribonacci([1, 3, 5], 5) = ${tribonacci([1, 3, 5], 5)}`);

