import data from "../sampleData/data.json"

export const getData = () => { 
    return new Promise ((resolve, reject) => {
        resolve (data);
    })
}