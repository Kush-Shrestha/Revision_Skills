// This is for task 
function calculateSimpleInterest(principal, rate, time) {
    const simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}
const principal = 1000;
const rate = 5;
const time = 2;

const interest = calculateSimpleInterest(principal, rate, time);
console.log(`Simple Interest: $${interest}`);// output: 100

// From user input 

const Principal = parseFloat(prompt("Enter principal amount:"));
const Rate = parseFloat(prompt("Enter rate of interest (% per year):"));
const Time = parseFloat(prompt("Enter time period (years):"));

const isnterest = calculateSimpleInterest(principal, rate, time);
console.log(`Simple Interest: $${interest}`);

// Sum by taking user input 
const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));
const sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);

function calculateSum(num1, num2) {
    return num1 + num2;
}

const Sum = num1 + num2;
console.log(`${num1} + ${num2} = ${Sum}`);

// Factorial 
function calculateFactorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }

    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

const num = parseInt(prompt("Enter a number to calculate factorial:"));
if (isNaN(num)) {
    console.log("Invalid input! Please enter a valid number.");
} else {

    const result = calculateFactorial(num);

    console.log(`Factorial of ${num} is: ${result}`);
}