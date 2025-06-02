import { describe, expect, test } from '@jest/globals';
import { search } from '../src/controllers/search';

/* Test todo: 
    - mock api -> currently stuck here. jest does not handle __dirname import, inclusion of babel still errs. skipping these for now
    - test dedupe filter dedupes
    - test accurate safe determination
    - test accurate handling of request body
    - test handles errors correctly
        - error on no input - send alert
        - error on full error - send alert
*/

const testInput1: string[] = ["test", "test", "shellac", "shellacish"];
const testInput2: string[] = ["test", "test", "shellac", "shellacish", "propanediol", "candy glaze"];
const riskList: string[][] = [["shellac", "shellac"], ["shellacish", "shellac"]];
const expectedSafeOutput = {
    safe: true,
    allergens: [],
    risks: []
}
const expectedRiskyOutput1 = {
    safe: false,
    allergens: [],
    risks: [["shellacish", "shellac"]]
}
const expectedRiskyOutput2 = {
    safe: false,
    allergens: ["propanediol, candy glaze"],
    risks: [["shellacish", "shellac"]]
}
const expectedUnsafeOutput = {
    safe: false,
    allergens: ["shellac"],
    risks: []
}

describe('dedupe', () => {
    test.skip('Successfully deduplicates allergen and risk lists where needed', () => {});
});

describe('safety', () => {
    test.skip('Safe flag is correctly set', () => {});
});

describe('functions', () => {
    test.skip('Expected function calls are made and handled', () => {});
});

describe('input error handling', () => {
    test.skip('Inadequate input length throws 400 with message', () => {});
});

describe('error handling', () => {
    test.skip('Failure in handler throws 404 and returns appropriate message for front end', () => {});
});