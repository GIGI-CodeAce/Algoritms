
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

console.log(countLetters('fffeeaaabbbb')); // { result: '4b3a2e3f', resultObj: { f: 3, e: 2, a: 3, b: 4 } }
