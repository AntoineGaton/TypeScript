// REFERENCES TYPES
let age: string | number | boolean;
age = 26;
console.log(typeof(age))
age = '26';
console.log(typeof(age))
age = true;
console.log(typeof(age))

let point1 = { x: 1, y: 1 };
let point2 = point1;

point1.y = 100;
console.log(point2.y); 

//ARRAYS IN TS
let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options: boolean[] = [true, false, false]; //can only contain true or false
let books: object[] = [
  { name: 'Fooled by randomness', author: 'Nassim Taleb' },
  { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript

ids.push(6);
// ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.

// OBJECT IN TS
// Declare a variable called person with a specific object type annotation
let person: {
    name: string;
    location: string;
    isProgrammer: boolean;
    id: number;
  };
  
  // Assign person to an object with all the necessary properties and value types
  person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
    id: 123
  };

console.log(person);

//   person.isProgrammer = 'Yes'; // ERROR: should be a boolean
  
  
//   person = {
//     name: 'John',
//     location: 'US',
//   }; 
  // ERROR: missing the isProgrammer property

// INTERFACE
interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
  }
  
  let person1: Person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
  };
  
  let person2: Person = {
    name: 'Sarah',
    location: 'Germany',
    isProgrammer: false,
  };
  console.log(person1);
  

