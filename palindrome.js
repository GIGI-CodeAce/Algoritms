
function checkIfPalindrome1(str){
    let result = Boolean
    const originalStr = str.toLowerCase()
    const newReversed = originalStr.split('').reverse().join('')

    newReversed === originalStr ? result = false : result = true

    
    console.log(newReversed, '-' ,originalStr, result);
}

function checkIfPalindrome2(str){
    const originalStr = str.toLowerCase()
    let newReversed = ''
    let result = Boolean
    for(let char of originalStr){
        newReversed = char + newReversed
    }
    originalStr === newReversed ? result = true : result = false

    
    console.log(newReversed, '-' ,originalStr, result);
}

checkIfPalindrome2('DINOSSAUR')