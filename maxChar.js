
function maxChar(str){
    const mapChar = {}
    let max = 0
    let maxChar = ''

    for (let char of str){
        if(mapChar[char]){
            mapChar[char] = mapChar[char] + 1
        }else{
            mapChar[char] = 1
        }}
    for (let key in mapChar){
        max = mapChar[key]
        maxChar = key
    }
    console.log(max, 'of', maxChar);
}

maxChar('haaha')