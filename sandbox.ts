const inputs = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach( input => {
console.log(input);
console.log ("Done")
}
);

let isBlackBelt = false;

// isBlackBelt = "yes";
isBlackBelt = true;

const circ = (diameter: number) => {
 return diameter * Math.PI
};

// console.log(circ("hello"));
console.log(circ(7.5));

// Array types tutorial
let names = ["Ali", "Mohammed", "Faisal"];

names.push("Rihan");
console.log(names);

// names.push(83);
// names[0] = 83; // likewise this way, it will give us type error.

let numbers = [15,25,50,83];

numbers.push(10);
console.log(numbers);
// numbers.push("ten");
// numbers[0] = "ten";

let mixed = ["Ahmad", 1, "Rihan", 2, "Ibrahim", 3];

mixed.push("Alaa");
mixed.push(4);
console.log(mixed);


let ninja = {
    name: "mario",
    belt: "black",
    age: 30,
};

ninja.name = "ryu";
ninja.age = 40;
// ninja.age = "forty";
// ninja.skills = ["fighting", "sneaking"]; // will not accept to add skills as it is not be declared from beginning.

ninja = {
    name: "Luigi",
    belt: "yellow",
    age: 30,
};

// ==================================================

let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "ten";
age = 27;

// isLoggedIn = "yes";
isLoggedIn = true;

// let ninjas: string[];
// to make empty array to avoid push method error in browser console:
let ninjas: string[] = [];

// to make empty array accepting multi types by using (Union types):
let mixedArrNinjas: (string | number | boolean)[] = [];

mixedArrNinjas.push("Kayla");
mixedArrNinjas.push(7);
mixedArrNinjas.push(true);

console.log(mixedArrNinjas);

// you can use Union types with normal variables without using paranthases:
let uid: string | number;
uid = "welcome";
uid = 4;

let ninjaOne: object;

// ninjaOne = {
//     name: "Ahmad",
//     ninjaId: 1,
//     beltColor: "black",
//     skills: ["fighting","sneaking", "well-power"]
// };
ninjaOne = ["Ahmad", 1, "black", ["fighting","sneaking", "well-power"]];

console.log(ninjaOne);

let ninjaTwo:{
    name: string,
    age: number,
    beltColor: string
};

ninjaTwo = {
    name: "Ahmad",
    age: 40,
    beltColor: "black",
    // skills: ["fighting","sneaking", "well-power"] // not declared in the beginning
};


// ==================================================

// Dynamic (any) types:

let ageTwo: any = 25;
console.log(ageTwo);
ageTwo = "hello";
console.log(ageTwo);
ageTwo = true;
console.log(ageTwo);
ageTwo = {name: "Luigi", age:26, isHasBro: true};
console.log(ageTwo);


let mixArr: any[] = [];

mixArr.push("mario");
mixArr.push(5);
mixArr.push(false);
console.log(mixArr);

// ==================================================

// Function basics:

let greet: Function;

greet = () => {
    console.log("hello word");
};

const add = (a: number, b:number, c?: number | string)=> {
    console.log(a + b);
};

add(5, 10);

const minus = (a: number, b: number) => {
return a - b;
};

let result = minus(10,7);

// result = "hi"; // can not change it as now result defined for return a-b
// result now is automatically inferred the return type and set to that function.

const minusTwo = (a: number, b: number): number => {
    return a - b;
    };
// you can add after parameter pranthases [ : number ] to inform other developers that look this function is going to return a number.


// ==================================================

// Type Aliases:

type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};


// ==================================================

// Function Signatures:

// let greeting: Function;

// example one:
let greeting: (a: string, b: string) => void; // void means that this function doesn't acually return something -- does not have return inside the function.

greeting = (name: string, greetings: string) => {
    console.log(`${name} says ${greetings}`);
};

// example two:

let calc : (a: number, b: number, c: string) => number; // we saying that calc should return number (if it will return string or boolean, will give us eror)

// parameters does not need to be match so that we can insert numOne instead of a - AND - numTwo instead of b, and so one.. all what important is the condition type.
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === "add") {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
};

// example three:

let logTwoDetails: (obj: {name: string, age: number}) => void;

logTwoDetails = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
};

// example 3 using type aliases:

type person = {name: string, age: number};

logTwoDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};