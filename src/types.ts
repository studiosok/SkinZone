import { Response } from 'express';

export type AllergenData = Array<Record<string, Array<string>>>

export type SearchReqBody = { body: string }

export interface SearchResBody extends Response { 
    safe: boolean,
    allergens: [string]
}