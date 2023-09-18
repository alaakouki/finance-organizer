var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
    console.log("Done");
});
var isBlackBelt = false;
// isBlackBelt = "yes";
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ("hello"));
console.log(circ(7.5));
// Array types tutorial
var names = ["Ali", "Mohammed", "Faisal"];
names.push("Rihan");
console.log(names);
// names.push(83);
// names[0] = 83; // likewise this way, it will give us type error.
var numbers = [15, 25, 50, 83];
numbers.push(10);
console.log(numbers);
// numbers.push("ten");
// numbers[0] = "ten";
var mixed = ["Ahmad", 1, "Rihan", 2, "Ibrahim", 3];
mixed.push("Alaa");
mixed.push(4);
console.log(mixed);
var ninja = {
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
var character;
var age;
var isLoggedIn;
// age = "ten";
age = 27;
// isLoggedIn = "yes";
isLoggedIn = true;
// let ninjas: string[];
// to make empty array to avoid push method error in browser console:
var ninjas = [];
// to make empty array accepting multi types by using (Union types):
var mixedArrNinjas = [];
mixedArrNinjas.push("Kayla");
mixedArrNinjas.push(7);
mixedArrNinjas.push(true);
console.log(mixedArrNinjas);
// you can use Union types with normal variables without using paranthases:
var uid;
uid = "welcome";
uid = 4;
var ninjaOne;
// ninjaOne = {
//     name: "Ahmad",
//     ninjaId: 1,
//     beltColor: "black",
//     skills: ["fighting","sneaking", "well-power"]
// };
ninjaOne = ["Ahmad", 1, "black", ["fighting", "sneaking", "well-power"]];
console.log(ninjaOne);
var ninjaTwo;
ninjaTwo = {
    name: "Ahmad",
    age: 40,
    beltColor: "black",
    // skills: ["fighting","sneaking", "well-power"] // not declared in the beginning
};
// ==================================================
// Dynamic (any) types:
var ageTwo = 25;
console.log(ageTwo);
ageTwo = "hello";
console.log(ageTwo);
ageTwo = true;
console.log(ageTwo);
ageTwo = { name: "Luigi", age: 26, isHasBro: true };
console.log(ageTwo);
var mixArr = [];
mixArr.push("mario");
mixArr.push(5);
mixArr.push(false);
console.log(mixArr);
// ==================================================
// Function basics:
var greet;
greet = function () {
    console.log("hello word");
};
var add = function (a, b, c) {
    console.log(a + b);
};
add(5, 10);
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
// result = "hi"; // can not change it as now result defined for return a-b
// result now is automatically inferred the return type and set to that function.
var minusTwo = function (a, b) {
    return a - b;
};
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
// ==================================================
// Function Signatures:
// let greeting: Function;
// example one:
var greeting; // void means that this function doesn't acually return something -- does not have return inside the function.
greeting = function (name, greetings) {
    console.log("".concat(name, " says ").concat(greetings));
};
// example two:
var calc; // we saying that calc should return number (if it will return string or boolean, will give us eror)
// parameters does not need to be match so that we can insert numOne instead of a - AND - numTwo instead of b, and so one.. all what important is the condition type.
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example three:
var logTwoDetails;
logTwoDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
logTwoDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
