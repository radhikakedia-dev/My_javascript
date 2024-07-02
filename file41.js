// find method

const myArray = ["hello","cat","dog","lion"];
const isLength = (string) => {
    return string.length === 3;
}
const res = myArray.find(isLength);

//const res = myArray.find((string) => string.length === 3);
console.log(res);




const users = [
    {userId : 1, userName : "radhika"},
    {userId : 2, userName : "ankita"},
    {userId : 3, userName : "neha"},
    {userId : 4, userName : "srishti"},
    {userId : 5, userName : "priti"},
]
//we can use this method on unique values

const resOfUser = users.find((user) => user.userId === 3);
console.log(resOfUser);