
function flatten(obj){
    let result = []
    
    for (let subArray of obj) {
        for (let num of subArray) {
            result.push(num);
        }
    }

    return result.sort((a, b) => a - b);
}

console.log(flatten([[0,1], [2,3], [4,5]]));
