export function isBalanced(input: string): boolean {

    const temp: string[] = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const matchingBrackets: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    /* length check */
    if (input.length % 2 !== 0 || input.length === 0) {
        return false;
    }

    /* bracket check */
    for (const char of input) {
        if (openingBrackets.includes(char)) {
            /* if opening bracket -> add to temp */
            temp.push(char);
        } else if (closingBrackets.includes(char)) {
            /* if closing bracket -> check if it matches the last opening bracket */
            if (temp.length === 0 || temp.pop() !== matchingBrackets[char]) {
                return false;
            }
        } else {
            /* if character is not a bracket */
            return false;
        }

    }
    /* if temp is empty, all matched */
    return temp.length === 0;
}