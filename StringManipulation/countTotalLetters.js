
function lettersCount(str){
    let splitStr = str.split("")
    let result = 0
    for(let char of splitStr){
        char === ' ' ? result : result++
    }

    return result
}

console.log(lettersCount("I hate balls")); // 10
