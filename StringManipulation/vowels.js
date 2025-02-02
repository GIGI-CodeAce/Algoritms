
function findVowels(str){
    let strObj = {}
    let vowels = 0
    str = str.toLowerCase()
    for(let char of str){
        strObj[char] = (strObj[char] || 0) + 1
    }
    for(let key in strObj){
        'aeiou'.includes(key) ? vowels += strObj[key] : vowels
        console.log(key,strObj[key]);
        
    }

    return vowels
}

console.log(findVowels("Mountain Climbers")); // 6
