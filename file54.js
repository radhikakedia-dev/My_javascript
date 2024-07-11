// arrow function

// const user1 = {
//     firstName : "Radhika",
//     age : 20,
//     about : () => {
//         console.log(this);
//         console.log(this.firstName,this.age);
//     },
// };


const user1 = {
    firstName : "radhika",
    age : 20,
    about(){
        console.log(this);
        console.log(this.firstName,this.age);
    },
};
user1.about();


