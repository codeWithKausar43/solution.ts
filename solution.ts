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


function getUniqueValues<T extends number | string>(firstArray: T[], secondArray: T[]): T[] {
    const uniqueValues: T[] = [];

    for (let i = 0; i < firstArray.length; i++) {
        let alreadyAdded = false;
        for (let j = 0; j < uniqueValues.length; j++) {
            if (firstArray[i] === uniqueValues[j]) {
                alreadyAdded = true;
                break;
            }
        }
        if (!alreadyAdded) uniqueValues.push(firstArray[i]);
    }

    for (let i = 0; i < secondArray.length; i++) {
        let alreadyAdded = false;
        for (let j = 0; j < uniqueValues.length; j++) {
            if (secondArray[i] === uniqueValues[j]) {
                alreadyAdded = true;
                break;
            }
        }
        if (!alreadyAdded) uniqueValues.push(secondArray[i]);
    }

    return uniqueValues;
}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (allProduct: Product[]): number => {
    if (allProduct.length === 0) return 0;
    const prices = allProduct.map(product => {
        const basePrice = product.price * product.quantity;
        return product.discount ? basePrice * (1 - product.discount / 100) : basePrice;
    });
    const total = prices.reduce((acc, price) => acc + price, 0);
    return total;
}
