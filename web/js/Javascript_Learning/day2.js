// function using parameter

function showmessage(from, text) {
    alert(from + ":" + text);
}
showmessage("Kushal", "Hello");//Kushal: Hello


function showmessage(text){
    if (text===undefined){    // if the parameter is missing
        text="there is no text"; // display if the input  is no given 
    }
    alert(text);
}

showmessage("hello");  // output is hello 


// Returning a value 

function sum(a,b){
    return a+b;
}
let add=sum(1,3);
console.log(add);// 4

// function without any return value 

function donothing(){

}
alert(donothing()===undefined);// output: true 

// it goes same for 

function doNothing(){
    rturn;
}
alter(doNothing()===undefined); // output: true 

// Note: Never add newline to the return.  like return 
//                                                  a+b
// As javascript thing that there is semicolon after return.  like return;
//                                                                   a+b which throws error  

// function that looks new
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);