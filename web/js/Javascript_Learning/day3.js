
// function that looks new to me 
function ask(question, yes, no) {
  if (confirm(question)) yes()// here confirm ask you permission 
  // like ok and cancel 
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);// these are the options that you get 

//Function Declaration Vs Function Expression

// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
let sum = function (a, b) {
  return a + b;
};


//A Function Declaration can be called earlier than it is defined.

sayHi("Kush"); // Hello, Kush

function sayHi(name) {
  alert(`Hello, ${name}`);
}

// But in case of function expression there will be error 

sayHi("Kush"); // error!

let sayHi = function (name) {
  alert(`Hello, ${name}`);
};