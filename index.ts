#! /usr/bin/env node

// 1) computer will generate a ramdom number : done
// 2) User input for gusing number : done
// 3) Compare user input with conputer generated number and show result : done

import inquirer from "inquirer";
console.log("Here is a Number gussing  game");

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between 1 to 6:",
  },
]);
if (answer.userGuessNumber === randomNumber) {
  console.log("Congratulations! You guessd right number");
} else {
  console.log("You guessd wrong number");
}
