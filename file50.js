// methods
// function inside object

function personInfo(){
    console.log(`the person name is ${this.firstName} and the person age is ${this.age}`);
}
const person1 = {
    firstName : "Radhika",
    age : 20 ,
    about : personInfo,
};
const person2 = {
    firstName : "Srishti",
    age : 22,
    about : personInfo,
};
const person3 = {
    firstName : "Neha",
    age : 28,
    about : personInfo,
};
// console.log(person3.about());
person1.about();
person2.about();
person3.about();