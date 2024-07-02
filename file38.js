// filter method

const numbers = [1,2,3,4,5,6,7,8,9,10];

// in this method lets filter odd and even numbers
//filter method will take a callback function
//it will return true or false

const isEven = (number) => {
        return number % 2 === 0;
}
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);



const isOdd = numbers.filter((number) => {
    return number % 2 !== 0;
})
console.log(isOdd);