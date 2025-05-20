import { fetchSourceData, searchData } from "../data/processData.js";
import { normalizeInput } from "../data/processInput.js";

export const queryHandler = (input: string) => {
    const data = fetchSourceData();
    const checkData = normalizeInput(input);
    const result = searchData(data, checkData);

    const safe = result.length < 1;

    return { safe: safe, allergens: result }
}