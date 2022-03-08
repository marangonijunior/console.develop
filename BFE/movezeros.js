/**
* List already in order
*/
const moveZeros = (arr) => {
    
    for (let i = list.length - 1; i >= 0; i--) {
        if (!list[i]) {
          list.splice(i, 1)
          list.push(0)
        }
    }
    
    return list

}

const list = [0,0,0,1,3,2,6];
console.log(moveZeros(list))