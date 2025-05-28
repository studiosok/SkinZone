import { describe, expect, test } from '@jest/globals';
import { normalizeInput } from '../data/processInput';

/* Test todo: 
    - test normalization functions work as expected for pattern matched input
    - test input get expected output
    - test handles errors correctly

*/

const testOutput: string[] = ["test-123", "3,6-test", "shellac", "shellacish"];
const cleanInput: string = "test-123, 3,6-test, shellac, shellacish";
const dirtyInput: string = "test-123; 3,6-Test,\n shellac\n, shellacish.";

describe('normalize clean input', () => {
    test('Correctly formats basic input strings', () => {
        expect(normalizeInput(cleanInput)).toEqual(testOutput);
    });
});

describe('normalize dirty input', () => {
    test('Correctly formats input strings with special chars', () => {
        expect(normalizeInput(dirtyInput)).toEqual(testOutput);
    });
});