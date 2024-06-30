//  parameter destructuring

const person = {
    firstName : "radhika",
    gender : "female"
}



const printDetails = (obj) => {
    console.log(obj.firstName);
    console.log(obj.gender);
}
printDetails(person);

const printDetails2 = (firstName,gender,age) => {
    console.log(firstName);
    console.log(gender);
}

printDetails2(person);

