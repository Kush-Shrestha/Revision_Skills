let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

    welcome = function () {
        alert("Hello!");
    };

} else {

    welcome = function () {
        alert("Greetings!");
    };

}

welcome();

//Or we could simplify it even further using a question mark operator ?

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    function () { alert("Hello!"); } :// when the age is less than 18 
    function () { alert("Greetings!"); };// when the age is more or equals to 18 

welcome(); 