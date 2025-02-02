
function countVow(str){
    let resultObj = {}
    let vowelscount = 0
    for(char of str){
        resultObj[char] = (resultObj[char] || 0)+1
    }
    for(key in resultObj){
    'aeiou'.includes(key) ? vowelscount++ : vowelscount
    }

    return vowelscount
}

console.log(countVow('aeiouw')); // 5
