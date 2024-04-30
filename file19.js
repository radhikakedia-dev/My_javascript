// object reference type
//arrays are good but not sufficient for real world 
//objets don't have index
//objects stores key value pairs

const person = {
    name : "radhika",
    age : 19,
    hobbies : ["reading","drawing"]    //"user hobbies" : ["reading","drawing"]
};
console.log(person);

// how to access data from object
console.log(person["name"]);
console.log(person.name); //dot notation
console.log(person.hobbies);
console.log(person.hobbies);   //console.log(person["user hobbies"]);

//how to add key value pair in object
person["gender"] = "female";
console.log(person);