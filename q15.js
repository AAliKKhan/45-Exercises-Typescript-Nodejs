"use strict";
// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// Initial list of guests
let guests = ["Kamran", "Umair", "Zuhaib"];
// Print initial invitation messages
for (let name of guests) {
    console.log(`Dear ${name}, I would be honored to have you join me for dinner.`);
}
// One guest can't make it
let unavailableGuest = "Umair";
console.log(`\nUnfortunately, ${unavailableGuest} can't make it to the dinner.`);
// Find the index of the unavailable guest and remove them
let index = guests.indexOf(unavailableGuest);
if (index !== -1) {
    guests.splice(index, 1); // Removes Umair
}
// Add a new guest
let newGuest = "Asim";
guests.push(newGuest); // Adds Asim to the end of the list
// Print new set of invitation messages
console.log("\nNew Invitations:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
});
