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

 
const getLength = (input : string | any[]) : number => {
if(typeof input === "string" || Array.isArray(input)){
    return input.length
} 
throw new Error("Invalid input");
}
 

class Person {
    name : string; 
    age : number; 

    constructor(name : string, age: number){
        this.name = name
        this.age = age
    }
    getDetails(): string {
        return (`'Name: ${this.name}, Age: ${this.age}'`);
    }
}


type Book = {
  title: string;
  rating: number;
};

const filterByRating = (allBooks: Book[]): Book[] => {
  const topRatingBooks = allBooks.filter(book => book.rating >= 4);
  return topRatingBooks;
};
 


