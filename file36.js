// forEach method 

const cars = [1,2,3,4];
 function myFunc(car,index){
    console.log(`index is ${index} and car is ${car}`);
 }
 cars.forEach(myFunc);

 const users = [
    {firstName : "radhika",age : 19},
    {firstName : "ankita",age : 28},
    {firstName : "neha",age : 25},
    {firstName : "priyanka",age : 20},
 ];
 const myFunc1 = (user) => {
    console.log(user.firstName);
 }

 users.forEach(myFunc1);

 
 // for a given array of numbers, print the square of each value using forEach loop

const numbers = [2,5,7,11];
const squareOfNumbers = (number) => {
    console.log(number * number) ;
}
numbers.forEach(squareOfNumbers);