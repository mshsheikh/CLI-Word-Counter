#!/usr/bin/env node
import inquirer from "inquirer";

const answers: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Write your sentence here to count it's words: \n",
  },
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);

console.log(`Your sentence word count is ${words.length}`);
