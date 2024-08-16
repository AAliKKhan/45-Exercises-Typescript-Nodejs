// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.



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


console.log("\nUnfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Dear ${removedGuest}, I'm sorry I can't invite you to dinner.`);
}


guests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});


guests.pop();
guests.pop();


console.log(`final guest list`);