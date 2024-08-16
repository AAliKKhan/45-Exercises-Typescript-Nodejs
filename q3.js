// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Name = "ali";
let lowerCaseName = Name.toLowerCase();
console.log("Lowercase:", lowerCaseName);
let upperCaseName = Name.toUpperCase();
console.log("Uppercase:", upperCaseName);
let titleCaseName = Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase();
console.log("Titlecase:", titleCaseName);
export {};
