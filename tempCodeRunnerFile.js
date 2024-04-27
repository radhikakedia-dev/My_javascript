const prompt = require('prompt-sync')();
let age = +prompt("enter your age") ;

if (age<17){
    console.log("you are not old enough to drive");
}else{
    console.log("you are old enough to drive ");
}