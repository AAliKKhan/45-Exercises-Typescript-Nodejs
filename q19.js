// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
// Guest List: A list of people you'd like to invite to dinner.
let guests = ["Kamran", "Umair", "Zuhaib"];
// Task 1: Print the number of people you're inviting to dinner.
console.log(`I am inviting ${guests.length} people to dinner.`);
// Task 2: Send a personalized invitation to each guest.
for (let name of guests) {
    console.log(`Dear ${name}, I would be honored to have you join me for dinner.`);
}
export {};
