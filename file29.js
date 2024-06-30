// lexical scope

function app(){
    const myVar = "value1";
function myFunc(){
    const myVar = "value24";
// if we comment the above line we will get the value from outside the function
    console.log("inside func",myVar);
}
const myFunc2 = function(){};
const myFunc3 = () => {};
console.log(myVar);
myFunc();
}
app();