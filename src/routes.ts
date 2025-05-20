import { Request, ResponseObject, ServerRoute } from '@hapi/hapi';
import Joi from 'joi';
import { queryHandler } from './routeHandler.js';
import { SearchReqBody } from './types.js';

export const routes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/',
        handler: () => {
            return 'basic api running, GET route hit';
        }
    },
    {
        method: 'POST',
        path: '/search',
        handler: (request: Request, h: ResponseObject) => {
            const { body } = request.payload as SearchReqBody
            return queryHandler(body);
        }
    }
];