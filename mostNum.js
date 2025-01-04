
function mostNum(nums){
    let resultObj = {}
    for(let num of nums){
        resultObj[num] = (resultObj[num] ||0)+1
    }
    let maxCount = 0
    let majority = null
    for(let key in resultObj){
        if(resultObj[key] > maxCount){
            maxCount = resultObj[key]
            majority = key
        }
    }
 
    return ['there are', maxCount, 'of', majority]
}

console.log(mostNum([2, 2, 1, 1, 1, 2, 2]));
