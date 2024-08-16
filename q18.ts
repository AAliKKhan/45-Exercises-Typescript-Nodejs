// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



let countries: string[] = ["Saudia Arabia", "Dubai", "U.S.A", "Australia", "Turkey"];


console.log("Original order:", countries);


let sortedCountries = [...countries].sort();
console.log("Alphabetical order (without modifying original):", sortedCountries);


console.log("Original order after sorting attempt:", countries);


let reverseSortedCountries = [...countries].sort().reverse();
console.log("Reverse alphabetical order (without modifying original):", reverseSortedCountries);


console.log("Original order after reverse sorting attempt:", countries);


countries.reverse();
console.log("Reversed order:", countries);


countries.reverse();
console.log("Restored to original order:", countries);


countries.sort();
console.log("Alphabetical order:", countries);


countries.sort().reverse();
console.log("Reverse alphabetical order:", countries);

           
