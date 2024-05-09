#! /usr/bin/env node


import inquirer from "inquirer"

//1st step :computer will operate a randome number

//2nd step :user input for guessing number

//3rd step :compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type: "number",
        message:"Please guess a number between 1-10:",
    },
]);

console.log(answer);

if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guessed right number.");
} else {
    console.log("You guessed wrong number.");
}