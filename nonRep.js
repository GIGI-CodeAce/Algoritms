
function leastRepChar(str){
    let resultObj = {}
    for(let char of str){
        resultObj[char] = (resultObj[char] || 0)+1
    }
    let minChar = Infinity
    let leastChar = null
    for(key in resultObj){
        if(resultObj[key]< minChar){
            minChar = resultObj[key]
            leastChar = key
        }
    }
    return leastChar
}

console.log(leastRepChar('axacc'));
