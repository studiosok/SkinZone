export const normalizeInput = (input: string): string[] => {
    const semiPattern = /[;]/gm;
    const patternMatchedInput = input.replaceAll(semiPattern, ',').split(', ');

    const finalInput: string[] = []
    for (const word of patternMatchedInput) {
        const tempWord: string[] = [];
        for (const char of word) {
            if (char.match(/[(]/)) {
                tempWord.pop()
                tempWord.push(', ')
                continue;
            }
            tempWord.push(char);
            if (char.match(/[)]/)) {
                tempWord.pop();
            }
        }
        const currentWord = tempWord.join('')
        const finalWord = currentWord.split(', ')
        finalWord.forEach((word) => finalInput.push(word));
    }
    return finalInput;
}