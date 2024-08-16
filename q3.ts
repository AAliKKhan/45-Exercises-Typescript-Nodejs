// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let Name: string = "ali";


let lowerCaseName: string = Name.toLowerCase();
console.log("Lowercase:", lowerCaseName); 


let upperCaseName: string = Name.toUpperCase();
console.log("Uppercase:", upperCaseName);


let titleCaseName: string = Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase();
console.log("Titlecase:", titleCaseName); 
