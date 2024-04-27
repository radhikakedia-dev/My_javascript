//Arrow function 

const sayHello = () => {
    console.log("HELLO!");
}
sayHello();



const add = (a , b) => {
    console.log(a+b);
}
add(5,6);



const multiply = (a , b) => {
    return a * b;
}
console.log(multiply(5,6));



const subtract = (a , b) => a-b ;
    console.log(subtract(5,2));




    sayHey();   // In plain function, we can call the function before declairing it but in Arrow function it doesn't work
    function sayHey(){
        console.log("Hello");
    }