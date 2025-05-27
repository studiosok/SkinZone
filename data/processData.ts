import fs from 'fs';

const dataString = fs.readFileSync('./data/allergenList.json', 'utf8');
const fullList: string[] = [];
JSON.parse(dataString, (key:string, value:any) => {
    if (typeof value === 'string') {
        fullList.push(value);
    }
});

export const fetchSourceData = () => {
    return normalizeList(fullList);
};
export const normalizeList = (input: string[]): string[] => {
   return input.map((word) => word.toLowerCase())
}

export const searchData = (data: string[], input: string[]): string[] => {
    const forbiddenList = [];
    input.forEach((item) => {
        data.filter((ingredient) => {
            if (ingredient === item) {
                forbiddenList.push(ingredient);
            }
        })
   })
   return forbiddenList;
}

export const pickySearch = (data: string[], input: string[]): string[][] => {
    const reviewList: string[][] = [];
    input.forEach((item) => {
        data.filter((ingredient) => {
            if (item.includes(ingredient)) {
                reviewList.push([item, ingredient])
            }
        })
    })
    return reviewList;
}