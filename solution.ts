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

