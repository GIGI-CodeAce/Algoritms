 function checkPrime(num){
    if(num < 2){
        return false
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i === 0){
            return false
        }
    }
    return true
 }

console.log(checkPrime(8));   // false
console.log(checkPrime(11));  // true
console.log(checkPrime(121)); // false
console.log(checkPrime(127)); // true
