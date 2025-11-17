 type Value = string | number | boolean
const formatValue = (value : Value) : string | number | boolean => {
if(typeof value === "string"){
    return value.toUpperCase()
}else if (typeof value === "number"){
    return value * 10
}else if(typeof value === "boolean"){
    return !value
}
throw new Error("Invalid type");
}

// problem 2
const getLength = (input : string | any[]) : number => {
if(typeof input === "string"){
    return input.length
}else if(Array.isArray(input)){
    return input.length
}
throw new Error("Invalid input");
}

