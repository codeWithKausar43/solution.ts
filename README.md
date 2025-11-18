### ১. TypeScript-এ Interface আর Type-এর মধ্যে পার্থক্য

TypeScript-এ `interface` আর `type` দুটোই object-এর structure define করার জন্য ব্যবহার হয়। তবে দুটার মধ্যে কিছু subtle পার্থক্য আছে।  

**Interface:**  
- Interface দিয়ে মূলত object-এর structure বা blueprint define করা হয়।  
- Interface extend করা যায়, অর্থাৎ নতুন properties যোগ করা সম্ভব।  
- উদাহরণ:

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

const emp: Employee = {
  name: "kausar",
  age: 20,
  salary: 30000
};


Type:

Type দিয়ে object, primitive, union বা intersection type সব define করা যায়।

Type-কে extend করা যায় না, কিন্তু intersection দিয়ে combine করা যায়।

উদাহরণ:

type PersonType = {
  name: string;
  age: number;
};

type EmployeeType = PersonType & {
  salary: number;
};

const emp2: EmployeeType = {
  name: "kausar",
  age: 20,
  salary: 30000
};





### ২. keyof keyword-এর ব্যবহার

`keyof` keyword TypeScript-এ একটা object type-এর **সব property name** বের করতে ব্যবহার হয়।  
এটি type-safe way-তে property access বা loop করতে সাহায্য করে।  

type Person = {
  name: string;
  age: number;
  city: string;
};

// keyof দিয়ে সব key পাওয়া যাবে
type PersonKeys = keyof Person; // "name" | "age" | "city"

// ব্যবহার
const key: PersonKeys = "age"; // ঠিক আছে
// const key2: PersonKeys = "salary"; // error, কারণ "salary" Person-এর key নয়

