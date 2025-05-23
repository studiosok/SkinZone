import { Request, NextFunction } from 'express';
import { fetchSourceData, searchData } from '../../data/processData.js';
import { normalizeInput } from '../../data/processInput.js';
import { SearchResBody } from '../types.js';


export const search = async (req: Request, res: SearchResBody, next: NextFunction) => {

    const body = req.body;

    const data = fetchSourceData();
    const checkData = normalizeInput(body.data);
    const result = searchData(data, checkData);
    const safe = result.length < 1;
// TODO: add error handling with next(err?)
    res.send({ safe: safe, allergens: result })
    
}