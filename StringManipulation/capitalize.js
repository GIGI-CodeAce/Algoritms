
function capitalize1(str){
    let words = str.split(' ')
    for(let i=0;i<words.length;i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    const capitalizedStr = words.join(' ')
    console.log(capitalizedStr);
}

function capitalize2(str){
    let result = []
    let words = str.split(' ')
    for(let word of words){
        result.push(word[0].toUpperCase() + word.slice(1))
    }
    result = result.join(' ')
    console.log(result);
}

function capitalize3(str){
    let words = str.split(' ')
    console.log(words.map(word => word[0].toUpperCase() + word.slice(1)).join(' '));
}


capitalize3('the cars are red') // The Cars Are Red
