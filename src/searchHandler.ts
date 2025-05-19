import got, { Response } from 'got';
import { SearchInterface } from './types.js';

const appId = process.env.AIRTABLE_BASE;
const tableId = process.env.AIRTABLE_TABLE;
const token = process.env.AIRTABLE_PAT;
const fieldId = process.env.TABLE_FIELD;
const targetUrl = `https://api.airtable.com/v0/${appId}/${tableId}/listRecords`;


export class Search implements SearchInterface {
    async fetchData() {
        let data: Response;
        try {
            data = await got.post(targetUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                json: {'fields': fieldId}
            });
            console.log(data.rawBody.toJSON());
        } catch(e: unknown) {
            // TODO: error handling
        }

        return data.rawBody;
    }

    searchData(terms: [string], data: Buffer) {
        // const names = data.rawBody

        // filter and return matched ingredients
        return terms

    }
}