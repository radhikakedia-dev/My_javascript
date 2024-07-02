// reduce method
// it gives one value in return 

// summing array elements
const numbers =[54,56,89,84];
const sum = numbers.reduce((accumulator,currentValue) => {
    return (accumulator + currentValue)
})
console.log(sum);

 
// calculating average
const average = numbers.reduce((accumulator,currentValue,index) => {
    accumulator += currentValue;
    if(index === numbers.length -1){
        return accumulator / numbers.length;
    }
    return accumulator;
})
console.log(average);


// find out max,min
const max = numbers.reduce((accumulator,currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue ;
})
console.log(max);

const min = numbers.reduce((accumulator,currentValue) => {
    return accumulator < currentValue ? accumulator : currentValue ;
})
console.log(min);


const userCart = [
    {productId : 1 , productName : "Mobile" , price : 150000},
    {productId : 2 , productName : "TV" , price : 284000},
    {productId : 3 , productName : "Laptop" , price : 200000},
]
// we can add total amount using for loop but reduce is more convenient

const totalAmount = userCart.reduce((accumulator,currentItem) => {
   return accumulator + currentItem.price ;
}, 0);
console.log(totalAmount);

