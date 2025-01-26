

function arraysum(arr){
    let result = 0
    for(let num of arr){
        result = num + result
    }

    return result
}

console.log(arraysum([2,3]));
