// some method
//some is a method that is used on arrays to test whether at least one element in the array passes a provided function (predicate)
//it returns a boolean value(true or false)


//check if there exists any number which is even
const numbers = [3,5,8,9];

const res = numbers.some((number) => number % 2 ===0);
console.log(res);   // here output true means atleast one number is even



// now check is there any product in the cart which went above 1 lakh

const userCart = [
    {productId : 1 , productName : "Mobile" , price : 20000},
    {productId : 2 , productName : "TV" , price : 75000},
    {productId : 3 , productName : "Laptop" , price : 100000},
    {productId : 4 , productName : "Camera" , price : 284000},
    ]

const check = userCart.some((product) => product.price > 100000);

console.log(check);
