
function countLetters(str){
    let resultObj = {}
    let result = ''
    for(let char of str){
        resultObj[char] = (resultObj[char] ||0)+1
    }
    for(let key in resultObj){
        result = resultObj[key] + key  + result
    }
    return {result, resultObj}
}

console.log(countLetters('fffeeaaabbbb'));
