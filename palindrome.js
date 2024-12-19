
function checkIfPalindrome(str){
    let result = Boolean
    const originalStr = str.toLowerCase()
    const newReversed = originalStr.split('').reverse().join('')

    newReversed === originalStr ? result = false : result = true

    
    console.log(newReversed, '-' ,originalStr, result);
}

checkIfPalindrome('DINOSSAUR')