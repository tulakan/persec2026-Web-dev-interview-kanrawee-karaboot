export function sortDigitsDesc(num: number): number {
    if (!Number.isInteger(num) || num < 0) {
        throw new Error(`Expected a non-negative integer, got ${num}`);
    }
    const sortedDigits = num.toString().split('').sort((a, b) => parseInt(b) - parseInt(a));
    return parseInt(sortedDigits.join(''), 10);
}
