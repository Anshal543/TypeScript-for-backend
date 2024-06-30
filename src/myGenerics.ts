const score : Array<number> = []
const names : Array<string> = []

function identityOne<Type>(val:Type):Type{
    return val
}

identityOne("1")

interface T{
    name:string
    age:number
}

function identityTwo<T>(val:T):T{
    return val
}

identityTwo({name:"John", age:23})


function getSearchProducts<T>(products:T[]):T{
    return products[3]
}

getSearchProducts([{name:"John", age:23}])

const getSearchProductsTwo = <T>(products:T[]):T[]=>{
    return products
}
