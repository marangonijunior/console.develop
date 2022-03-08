const arr = [1, [2], [3, [4]]];

const flat = (arr, level = 1) => {
    let result = [];
    let isDone = true;

    for(let item of arr){
        if(!Array.isArray(item)){
           result.push(item);
        } else {
           isDone = false
           result.push(...item);
        }
    }
    
    return level === 0 || isDone ? arr : flat(result, level - 1)
}
    

console.log(flat(arr, Infinity))
console.log(flat(arr, 1))

