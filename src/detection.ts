function random(val:string|number){
    if(typeof val === "number"){
        return val
    }
    return val.toLowerCase()
}