// This is a memory related problem

const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function(){
        return this.age>=18;
    },
};

function createUser(firstName,lastName,email,age,address){
    const user ={};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser("Radhika","Kedia","kedia@example.com","20","h.no 02");
const user2 = createUser("Nita","Bose","nita@example.com","28","h.no 04");

console.log(user1);
console.log(user2);