
function reverseWords(str){
    let splitedStr = str.toLowerCase().split(' ').filter(word => word !== '');
    let result = ''
    for(let key in splitedStr){
        result = splitedStr[key]+ ' ' + result
    }
    result = result.trim()
    return {result}
}

console.log(reverseWords('hello world')); // { result: 'world hello' }
