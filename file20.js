// how to iterate objects

const person =  {
    name : "radhika",
    age : 19,
    "person hobbies" : ["reading","drawing"]
};

//for in loop
//object.keys

for(let key in person){
console.log(key,":",person[key]);
}
console.log(Object.keys(person)); //return an array
console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person)));
console.log(val);

//for of loop

for (let key of Object.keys(person)){
    console.log(key);
    console.log(person[key])
}
