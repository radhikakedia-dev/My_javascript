// default parameters

function addTwoNumbers(a,b=10){
    return a+b;
}

const ans = addTwoNumbers(4,5);
console.log(ans);