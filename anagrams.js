
function checkIfAnagram1(str1,str2){
    let result = false

    function sort(str){
        return str.toLowerCase().replace(/[\W]/g,'').split('').sort().join('')
    }

    const sortedStr1 = sort(str1)
    const sortedStr2 = sort(str2)
    sortedStr1 === sortedStr2 ? result = true : result = false

    return {sortedStr1, sortedStr2, result}
}

function checkIfAnagram2(str1,str2){
     let charMapA = {}
     let charMapB = {}

     function charMap(str,charMap){
        let stringA = str.toLowerCase()
        for(let char of stringA){
            charMap[char] = ++charMap[char] || 1
         }
     }
     charMap(str1,charMapA)
     charMap(str2,charMapB)

    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false
    for(let key in charMapA){
        if (charMapA[key] !== charMapB[key]) return false
    }
    
    return true
}

console.log(checkIfAnagram1('coding money', 'money coding'));
console.log(checkIfAnagram1('RAIL SAFETY', 'fairy tales'));
