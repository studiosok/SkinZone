import { Request, Response } from 'express';
import path from 'path';
const __dirname = import.meta.dirname;

export const index = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
};