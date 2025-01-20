
const products = [
    {title:"Iphone 8",
    company: "Apple"
},
    {title:"Galaxy",
    company: "Samsung"
},
    {title:"Iphone 7",
    company: "Apple"
},
    {title:"S24 ultra",
     company: "Samsung"
    },
    {title:"Nothing phone",
    company: "Nothing"
},]

function uniqueCompanies(products){
    let uniqueCompanies = []
        for(let product of products){
            if(!uniqueCompanies.includes(product.company))
                uniqueCompanies.push(product.company)
        }
        return uniqueCompanies
}

console.log(uniqueCompanies(products));
