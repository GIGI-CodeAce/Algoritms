
function capitalize(str){
    let words = str.split(' ')
    for(let i=0;i<words.length;i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    const capitalizedStr = words.join(' ')
    console.log(capitalizedStr);
    
}

capitalize('wassup bro')

// node 'c:/Users/dobre/OneDrive/Desktop/algoritms/algoritms/capitalize.js'