export interface SearchInterface {
    fetchData: () => Promise<Buffer>,
    searchData: (terms: [string], data: Buffer) => [string]
}