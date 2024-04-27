// Function Declaration

function sayHello(){
    console.log("Hello Radhika");
}
sayHello();


//         argument
function add(a , b){            
    console.log(a + b);
}
add(5,10);  //parameters


function multiply(a,b){
    return a*b;
}
let a = multiply(10,10);
console.log("result is",a)



function isEven(number){
    if(number%2===0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(15));




// Function Expression (function is stored inside a variable)

const hello = function(){
    console.log("My name is Radhika");
}
hello();


