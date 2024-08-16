// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let nameWhitespace = "\t\n  Ali  \n\t";
console.log("Name with whitespace:");
console.log(nameWhitespace);
let strippedName = nameWhitespace.trim();
console.log("Name after stripping whitespace:");
console.log(strippedName);
export {};
