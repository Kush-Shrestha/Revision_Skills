
// function that looks new to me 
function ask(question, yes, no) {
  if (confirm(question)) yes()// here confirm ask you permission 
  // like ok and cancel 
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