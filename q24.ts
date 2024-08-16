// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:


// • Tests for equality and inequality with strings


let fruit = "apple";
console.log("Fruit == 'apple' I predict True.");
console.log(fruit == 'apple'); // True

console.log("Fruit == 'orange'? I predict False.");
console.log(fruit == 'orange'); // False


// • Tests using the lower case function

let person = "Ali"
console.log("person.toLowerCase == `Ali` I predict True")
console.log(person.toLowerCase() == `ali`)

console.log("person.toLowerCase == `Ali` I predict False")
console.log(person.toLowerCase() == `Ali`)


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.


let age= 30

console.log("Age == 30? I predict True.");
console.log(age == 30); // True

console.log("Age != 30? I predict False.");
console.log(age != 30); // False

console.log("Age > 25? I predict True.");
console.log(age > 25); // True

console.log("Age < 25? I predict False.");
console.log(age < 25); // False

console.log("Age >= 30? I predict True.");
console.log(age >= 30); // True

console.log("Age <= 25? I predict False.");
console.log(age <= 25); // False


// • Tests using "and" and "or" operators


// let isMember = true;
// let hasPaid = false;
// console.log("IsMember == true && hasPaid == false? I predict True.");
// console.log(isMember == true && hasPaid == false); // True

// console.log("IsMember == true || hasPaid == true? I predict True.");
// console.log(isMember == true || hasPaid == true); // True

// console.log("IsMember == false || hasPaid == true? I predict False.");
// console.log(isMember == false || hasPaid == true); // False

// console.log("IsMember == true && hasPaid == true? I predict False.");
// console.log(isMember == true && hasPaid == true); // False


// • Test whether an item is in a array

let cars:string[]=["G Wagon","Rolls Royce","Lamborghini"]
console.log("G Wagon is in cars, I predict True")
console.log(cars.includes (`G Wagon`))

console.log("Ferrari is in cars, I predict False")
console.log(cars.includes (`Ferrari`))


// • Test whether an item is not in a array


let smartphones:string[]=["Apple","Samsung","Oppo"]
console.log("VIVO is in smartphones, I predict True")
console.log(!smartphones.includes (`VIVO`))

console.log(" is in smartphones, I predict False")
console.log(!smartphones.includes (`Samsung`))
