console.log("Hello World");// outpuut: Hello World

var username="Kushal";// global variable 
function showmessage(){
    var username="Kush";//local variable

    let message = "Hello"+ username;
    alert(message);
}
showmessage();// the function will create and use its own userName
alert(username); //output will be Kushal as the function did not access the outer variable