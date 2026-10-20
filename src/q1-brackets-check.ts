export function isBalanced(input: string): boolean {

    const stack: string[] = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const matchingBrackets: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    if (input.length % 2 !== 0) {
        return false;
    }

    for (const char of input) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}