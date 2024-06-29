//function declaration

function singHappyBirthday(){
    console.log("Happy Birthday to you");
}
singHappyBirthday();


function addTwoNumbers(a,b){
   return a+b; 
}
const addedNumbers = addTwoNumbers(5,6);
console.log(addedNumbers);


function isEven(n){
    if(n%2===0){
        return true;
    }
    return false;
}
console.log(isEven(5));


function findTarget(arr , target){                  
for(i=0;i<arr.length;i++){
if(arr[i]===target){
    return i;
}
}
return -1;
}
const myArray = [4,8,6,9];
const ans = findTarget(myArray,8);
console.log(ans);











