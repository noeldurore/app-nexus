/**
 * Filename: ComplexProgram.js
 * 
 * Description:
 * This complex JavaScript program performs a variety of tasks, including data manipulation,
 * algorithm implementation, and interaction with the user. It showcases advanced programming
 * concepts and techniques.
 * 
 * Author: Your Name
 * Date: DD/MM/YYYY
 */

// Global variables
let inputNumbers = [];
let sum = 0;
let average = 0;

// Function to get input numbers from the user
function getInputNumbers() {
  let count = parseInt(prompt("How many numbers will you enter?"));

  for (let i = 0; i < count; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}:`));
    inputNumbers.push(num);
  }
}

// Function to calculate the sum of the input numbers
function calculateSum() {
  for (let i = 0; i < inputNumbers.length; i++) {
    sum += inputNumbers[i];
  }
}

// Function to calculate the average of the input numbers
function calculateAverage() {
  average = sum / inputNumbers.length;
}

// Function to find the maximum number in the input
function findMax() {
  let max = inputNumbers[0];

  for (let i = 1; i < inputNumbers.length; i++) {
    if (inputNumbers[i] > max) {
      max = inputNumbers[i];
    }
  }

  return max;
}

// Function to find the minimum number in the input
function findMin() {
  let min = inputNumbers[0];

  for (let i = 1; i < inputNumbers.length; i++) {
    if (inputNumbers[i] < min) {
      min = inputNumbers[i];
    }
  }

  return min;
}

// Function to sort the input numbers in ascending order
function sortAscending() {
  inputNumbers.sort((a, b) => a - b);
}

// Main function to execute the program
function main() {
  console.log("Welcome to the Complex Program!");
  console.log("Please enter some numbers:");

  getInputNumbers();
  calculateSum();
  calculateAverage();

  console.log(`Sum of the entered numbers: ${sum}`);
  console.log(`Average of the entered numbers: ${average}`);
  console.log(`Maximum number: ${findMax()}`);
  console.log(`Minimum number: ${findMin()}`);

  sortAscending();
  console.log("Numbers in ascending order:", inputNumbers);
}

// Call the main function to run the program
main();