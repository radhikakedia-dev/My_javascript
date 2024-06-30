//3rd way
//arrow function

const singHappyBirthday = ()=>{
    console.log("Happy Birthday to You");
}
singHappyBirthday();



const addTwoNumbers = (a,b) =>{
    return a+b;
}
const addedNumbers = addTwoNumbers(5,5);
console.log(addedNumbers);



const findTarget = (arr,target) =>{
    for (let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [2,3,8,9];
let ans = findTarget(myArray,9);
console.log(ans);



