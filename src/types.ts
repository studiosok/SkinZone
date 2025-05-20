export interface SearchInterface {
    fetchData: () => Promise<Buffer>,
    searchData: (terms: [string], data: Buffer) => [string]
}

export type AllergenData = Array<Record<string, Array<string>>>

export type SearchReqBody = { body: string }