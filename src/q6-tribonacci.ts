export function tribonacci(nums: number[], count: number): number[] {
    /* check inputs length 0-3 */
    if (nums.length > 3) {
        throw new Error(`Expected an array of at most 3 numbers, got ${nums.length}`);
    }

    /* check count is a non-negative integer */
    if (!Number.isInteger(count) || count < 0) {
        throw new Error(`Expected a non-negative integer, got ${count}`);
    }



    const result: number[] = [...nums];
    while (result.length < count) {
        /* get last three values and sum them */
        const nextValue = result.slice(-3).reduce((a, b) => a + b, 0);
        /* add the new value to the result array */
        result.push(nextValue);
    }
    return result.slice(0, count);




}

