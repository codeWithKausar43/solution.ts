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


type Books = {
  title: string;
  rating: number;
};
const filterByRating = (allBooks: Books[]): Books[] => {
  const topRatingBooks = allBooks.filter(book => book.rating >= 4);
  return topRatingBooks;
};
 

type Users = {
id : number; 
name : string; 
email : string; 
isActive : boolean; 
}

const filterActiveUsers = (users : Users[]) : Users[] => {
return users.filter(user => user.isActive === true)
}


interface Book{
title :  string; 
author : string; 
publishedYear : number; 
isAvailable : boolean; 
}

const printBookDetails = (allBook : Book) : void => {
console.log(`Title: ${allBook.title}, Author: ${allBook.author}, Published: ${allBook.publishedYear}, Available: ${allBook.isAvailable ? 'Yes' : 'No'}`); 
}



// solution 7 
function getUniqueValues<T extends number | string>(array1: T[], array2: T[]): T[] {
  const result: T[] = [];

  for (let i = 0; i < array1.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (array1[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) result.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (array2[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) result.push(array2[i]);
  }

  return result;
}


