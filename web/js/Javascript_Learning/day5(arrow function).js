//syntax of arrow function 

let func = (arg1, arg2, ..., argN) => expression;

//Example 

let sayHi = () => alert("Hello!");

sayHi();// output Hello!

// Traditional function
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Arrow function 
const isEven = num => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

// Usage
console.log(isEven(4)); // Output: true

