// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let guests: string[] = ["Kamran", "Umair", "Zuhaib"];


for (let name of guests) {
  console.log(`Dear ${name}, I would be honored to have you join me for dinner.`);
}


let unavailableGuest = "Umair";
console.log(`\nUnfortunately, ${unavailableGuest} can't make it to the dinner.`);


let index = guests.indexOf(unavailableGuest);
if (index !== -1) {
    guests.splice(index, 1); 
}


let newGuest = "Asim";
guests.push(newGuest); 


console.log("\nNew Invitations:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
});

console.log("\nI found a bigger dinner table!");


guests.unshift("Hadi");
guests.splice(Math.floor(guests.length / 2), 0, "Ali");


let anotherNewGuest = "Abdullah";
guests.push(anotherNewGuest);


console.log("\nUpdated Invitations:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
});
