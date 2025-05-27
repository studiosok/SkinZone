import { Request } from 'express';
import { fetchSourceData, searchData, pickySearch } from '../../data/processData.js';
import { normalizeInput } from '../../data/processInput.js';
import { SearchResBody } from '../types.js';


export const search = async (req: Request, res: SearchResBody) => {
    try {
        let safe: boolean = false;
        const input = req.body.data;
        if (input.length < 1) {
            res.status(400).send('No input given');
            return;
        }
        const data = fetchSourceData();
        const checkData = normalizeInput(input);
        const result = searchData(data, checkData);

        let risks: string[][] = pickySearch(data, checkData);

        if (result.length < 1 && risks.length < 1) {
            safe = true;
        }
        // dedupe possibles and exact matches
        if (result.length > 0 && risks.length > 0) {
            risks = risks.filter((item) => {
                return !result.includes(item[0])
            })
        }

        res.send({ safe: safe, allergens: result, risks })
    }
    catch(err) {
        //TODO: bubble up and handle errors, message UI
        res.status(404).send(err);
    }
    
}