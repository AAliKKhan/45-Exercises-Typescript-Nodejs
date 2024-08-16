// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!


let favourite_fruits:string[]=["Mango","Banana","Apricot","Watermelon","Apple"]

if (favourite_fruits.includes (`Mango`)) {
  console.log(`You really like ${favourite_fruits[0]}`)
}
 if (favourite_fruits.includes (`Banana`)){
  console.log(`You really like ${favourite_fruits[1]}`)
}
 if (favourite_fruits.includes (`Apricot`)){
  console.log(`You really like ${favourite_fruits[2]}`)
}
 if (favourite_fruits.includes (`Watermelon`)){
  console.log(`You really like ${favourite_fruits[3]}`)
}
 if (favourite_fruits.includes (`Apple`)){
  console.log(`You really like ${favourite_fruits[4]}`)
}
