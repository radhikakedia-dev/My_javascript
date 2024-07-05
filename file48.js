// maps
// map is iterable

//stores data in ordered fashion

// stores in key value pair (like objects)
// duplicate keys are not allowed like objects

// difference between maps and objects

//object literal
// key --> String
// key --> Symbol

const person = {
    firstName : "radhika",
    age : 20,
    1 : "one",
}

console.log(person.firstName);
console.log(person["firstName"]);

for (let key in person){
    console.log(typeof key);
}

// object completed

//-----------------------------------------------------------

// now we will talk about maps
// key value pair
const person2 = new Map();
person2.set("firstName","radhika");
person2.set("age",20);
person2.set(1,"one");
person2.set([1,2,3], "onetwothree");
person2.set({1 : "one"},"object literal");
console.log(person2);

//console.log(person2["firstName"]);

//how to access from map
// we use the get method
console.log(person2.get("age"));
console.log(person2.get("firstName"));
console.log(person2.get(1));

// if we want to console all keys
console.log(person2.keys());

for(let key of person2.keys()){
    console.log(key, typeof key);
}

// objects are not iterable but maps are

for(let key of person2){
    console.log(Array.isArray(key));
}

for(let [key,value] of person2){
    console.log(key,value);
}
// in object the key must be a string but that doesn't happen in the case of map
// keu can be anything in map

//let's see a realistic example

const person1 = {
    id : 1 ,
    firstname : "radhika",
};
const person3 = {
    id : 2 ,
    firstname : "shruti",
};

const person4 = new Map([["firstName" , "radhika"] , ["age",20] ,])
console.log(person4);

const userInfo = new Map();
userInfo.set(person1 , {age : 20 , gender : "female"});
userInfo.set(person3 , {age : 22 , gender : "feamle"});
console.log(userInfo);

console.log(person1.id);
console.log(userInfo.get(person1).gender);
console.log(userInfo.get(person3).age);

// this is how we use maps

