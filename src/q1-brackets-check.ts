export function isBalanced(input: string): boolean {

    const stack: string[] = [];
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
            /* if opening bracket -> add to stack */
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            /* if closing bracket -> check if it matches the last opening bracket */
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        } else {
            /* if character is not a bracket */
            return false;
        }

    }
    /* if stack is empty, all matched */
    return stack.length === 0;
}