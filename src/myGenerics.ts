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

interface DataBase{
    connnection: string
    id:number
}

function anotherFunction<T,U extends DataBase>(val1:T,val2:U):object{
    return {val1,val2}
}

anotherFunction("John",{connnection:"Connected",id:1})

interface Quiz{
    question:string
    answer:number
}

interface Couser{
    name:string
    course:string
}

class Sellable<T>{
    public cart:T[] = []
    constructor(product:T){
        this.cart.push(product)

    }
}
