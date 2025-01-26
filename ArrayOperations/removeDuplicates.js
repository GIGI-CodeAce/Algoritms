
function remDupe(arr){
    let result = []

    for(let name of arr){
        if(!result.includes(name)){
            result.push(name)
        }
    }

    return result
}

console.log(remDupe(['Duke', 'Sigma', 'Rizzler', 'Duke', 'Sigma', 'Batman']));
