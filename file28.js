// function inside function

const app = () => {
    const myFunc = () => {
        console.log("Hello");
    }
    const addTwoNumbers = (a , b) => {
        return a + b;
    }

    console.log("Inside app");
    myFunc();
    console.log(addTwoNumbers(9 , 7));
}
app();
    

    