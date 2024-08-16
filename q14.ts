// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest:string[]=["Kamran","Umair","Zuhaib"]

for(let name of guest){
  console.log(`Dear ${name}, I would be honored to have you join me for dinner.`)
}