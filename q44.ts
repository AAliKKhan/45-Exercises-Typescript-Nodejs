// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// // of arguments each time.

function makeSandwiches(...items:string[]){
  console.log("We are making sandwiches with the following items:")
  items.forEach(items =>{
  console.log(`- ${items}`);
  })
}

makeSandwiches('Egg', 'Cheese', 'Ketchup');
makeSandwiches('Kebab', 'Sauce', 'Onion');
makeSandwiches('Peanut butter', 'Nuts', `Banana`);