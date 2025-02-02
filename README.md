<h1 align="center" id="title">JavaScript Algoritms</h1>

<p id="description">
    Javascript algoritms i made/found including folders: ArrayOperations, NumbersAndMath, StringManipulation, etc..
</p>

<h2 align="center">🧐 Features</h2>

<h4>Project's features</h4>

*   20+ Algoritms
*   Including Array, string, object manipulation
*   ArrayOperations, NumbersAndMath, StringManipulation folders
*   Project Algoritm props:

```javascript
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
```
```javascript
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
```

[![Portfolio](https://img.shields.io/badge/Portfolio-62b1ff?style=for-the-badge&logo=web&logoColor=white)](https://www.gigicodeace.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-3e3eff?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dobre-robert-03653b331/)
[![GitHub](https://img.shields.io/badge/GitHub-2f2f2f?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GIGI-CodeAce)
[![CSS Battles](https://img.shields.io/badge/CSS%20Battles-ff6e96?style=for-the-badge&logo=css3&logoColor=white)](https://cssbattle.dev/player/gigi)

  <b></b>
   <h4>~GIGI <code>Dore Robert</code></h4>
</footer>