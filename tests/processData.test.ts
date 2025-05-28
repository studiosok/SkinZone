import fs from 'fs';
import { describe, expect, test } from '@jest/globals';
import { fetchSourceData, searchData, pickySearch } from '../data/processData';

/* Test todo: 
    - test data fetch works as expected
    - test normalization function
    - test searchData gives accurate forbidden list
    - test pickySearch gives accurate review list
    - test handles errors correctly
*/

const testJson = fs.readFileSync('./tests/testData/testAllergens.json', 'utf-8');
const fullList = ["candy glaze",
      "confectioners glaze",
      "einecs 232-549-9gum lac",
      "lac resin",
      "lacca",
      "resins lac or shellac",
      "schellack",
      "shellac purified",
      "shellac orange s-40",
      "shellac", "propylene glycol",
      "methylethyl glycol",
      "propane - 1,2 - diol",
      "2 - hydroxypropanol",
      "1,2 dihydroxypropane",
      "isopropylene glycol",
      "e1520",
      "1,2 - propandiol",
      "propanediol"]

const testInput: string[] = ["test", "test", "shellac", "shellacish"];

describe('fetch source data', () => {
    test('Correctly parses JSON allergen to list of lowercase string allergens', () => {
        expect(fetchSourceData(testJson)).toEqual(fullList);
    });
});

describe('search data', () => {
    test('Correctly compiles list of allergens from input', () => {
        expect(searchData(fullList, testInput)).toEqual(["shellac"]);
    });
});

describe('pick search', () => {
    test('Correctly catches both exact and similar allergen matches from input', () => {
        const pickySearchResult = pickySearch(fullList, testInput);
        expect(pickySearchResult).toEqual([["shellac", "shellac"], ["shellacish", "shellac"]]);
        expect(pickySearchResult).toHaveLength(2);
        

    });
});