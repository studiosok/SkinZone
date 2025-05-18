import got from 'got';

const appId = process.env.AIRTABLE_BASE;
const tableId = process.env.AIRTABLE_TABLE;
const token = process.env.AIRTABLE_PAT;
const fieldId = process.env.TABLE_FIELD;

const targetUrl = `https://api.airtable.com/v0/${appId}/${tableId}/listRecords`;

const data = await got.post(targetUrl, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    json: {'fields': fieldId}
});

// parse data