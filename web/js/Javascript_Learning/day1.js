console.log("Hello World");// outpuut: Hello World

var username="Kushal";// global variable 
function showmessage(){
    var username="Kush";//local variable

    let message = "Hello"+ username;
    alert(message);
}
showmessage();// the function will create and use its own userName
alert(username); //output will be Kushal as the function did not access the outer variable

//Objects 
let numbers= {10,12,14,16};
for(let i= 0; i<number.length;i++){
    .console.log(numbers[i]);
}

//Pattern test 
let text= "Hello123";
let pattern =/[0-9]/;
if(pattern.test(text)){
console.log("String contain a number");
}
else{  
console.log("String doesn't containt any number");
}// output :String contain a number

let msg ="I am Kushal";
let patterns=/Kushal/;
if (pattern.test(msg)){
    console.log("I am here");
}
console.log("sorrry I am not here");
//output: I am here

