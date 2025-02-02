
function chunks(arr,size){
    let newArr = []
    let index = 0

    while(index<arr.length){
        newArr.push(arr.slice(index,size+index))
        index+= size
    }
    console.log(newArr);
    
}

chunks(['2','3','4','5'], 2) // [ [ '2', '3' ], [ '4', '5' ] ]
