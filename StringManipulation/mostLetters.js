
function mostLetters(str){
    const mapChar = {}
    let max = 0
    let mostLetters = ''

    for (let char of str){
        if(mapChar[char]){
            mapChar[char] = mapChar[char] + 1
        }else{
            mapChar[char] = 1
        }}
    for (let key in mapChar){
        max = mapChar[key]
        mostLetters = key
    }
    console.log(max, 'of', mostLetters);
}

mostLetters('haaha') // 3 of a