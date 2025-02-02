
function steps(n,char){
    for(let row=0;row<n;row++){
        let pattern = ""
        for(let col=0;col<n;col++){
            if(row<=col){
                pattern += char
            }else{
                pattern += ' '
            }
        }
        console.log(pattern);
        
    }
}

steps(10, '=')

// ==========
//  =========
//   ========
//    =======
//     ======
//      =====
//       ====
//        ===
//         ==
//          =
