
function largestPrime(arr){
    let result = 0

    for(let num of arr){
        if(num < 2 && num * 2 === 0){
            return false
        }else{
            if(result < num){
                result = num
            }
        }
    }

    return result
}


console.log(largestPrime([4,5,7,8,9,11,12,17,97,47])); // 97
