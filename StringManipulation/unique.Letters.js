
function unique(str) {
    let strObj = {};
    
    for (let char of str) {
        if (strObj[char]) {
            return false;
        }
        strObj[char] = 1;
    }
    return true;
}

console.log(unique('abcde')); // true
console.log(unique('aabcde')); // false
