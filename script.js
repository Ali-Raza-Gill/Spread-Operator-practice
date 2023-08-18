// spread oprator

// It is used to join 2 or more than 2 arrays/objects and variables
// It can create the copy of the data. 

// spread operator for Object
const person1={
    name:"ali",
    age:22,
    uni:"uaf"
}
const person2={
    ag:6362,
    dep:"cs",
    location: "fsd"
}

console.log(...person1,...person2);

console.log(...person1); //This will create the duplicate data of object

// spread operator for Array
const person3=[1,2,3,4,5,6,7,8];
const person4=[8,7,6,5,4,3,2,1];

console.log(...person3,...person4);

console.log(...person1); //This will create the duplicate data of array