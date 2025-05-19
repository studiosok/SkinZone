import { Request, ResponseObject } from 'hapi';
import { Search } from './searchHandler.js';

export const routes = [
    {
        method: 'POST',
        path: '/search',
        handler: (request: Request, h: ResponseObject) => {
            // TODO: call handler search to fetch and filter data
        }
    }
];