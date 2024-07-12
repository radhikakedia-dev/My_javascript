// factory function (we have to create multiple objects again and again that have the same logic, we can write the logic once in a function and use that function as a factory to create our objects).

const user1 = {
    firstName : "Radhika 1",
    lastName : "Kedia",
    email : "radhika2003@gmail.com",
    age : 20,
    address : "h.no 00 , kolkata , west bengal",
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age>=18;
    },
};
console.log(user1);
const aboutUser = user1.about();
console.log(aboutUser);

// const user2 = {
//     firstName : "Radhika 2",
//     lastName : "Kedia",
//     email : "radhika2003@gmail.com",
//     age : 20,
//     address : "h.no 00 , kolkata , west bengal",
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age>=18;
//     },
// };

// const user3 = {
//     firstName : "Radhika 3",
//     lastName : "Kedia",
//     email : "radhika2003@gmail.com",
//     age : 20,
//     address : "h.no 00 , kolkata , west bengal",
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age>=18;
//     },
// };



//if we don't want to face this problem , we can make a function for this
// function that creates objects
// 1) add key vaalue pair
// 2) returns object

function createUser(firstName , lastName , email , age , address){
    const user = {};
    user.firstname = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age}`;
    };
    user.is18 = function(){
        return this.age>=18;
    };
    return user;
};

const newUser = createUser("Radhika","Kedia","radhika8@gmail.com",20,"h.no. 06");
console.log(newUser);
const is18 = newUser.is18();
console.log(is18);