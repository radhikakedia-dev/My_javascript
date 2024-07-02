// map method

// map() creates a new array 

//map() doesn't execute the function for empty elements

//map() does not change the original array

const numbers = [3,4,5,6,7];
let squareNumbers = (number) => {
    return number*number;
    // it's very crucial to return while using map
}

let newArray = numbers.map(squareNumbers);
console.log(newArray);




const users = [
    {firstName : "radhika", age : 20},
    {firstName : "ankita", age : 28},
    {firstName : "neha", age : 21},
    {firstName : "priyanka", age : 19}
]
let userName = users.map((user) => {
    return user.firstName;
})
console.log(userName);









