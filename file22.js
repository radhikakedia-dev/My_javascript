// spread operator in object

const newArray =  [... "Radhika"]; // we cant use integer instead of strings coz integer are not iterable like strings
console.log(newArray); 

const obj1 = {
    key1 : "value1" ,
    key2 : "value2" ,
    // we cant use same key two times
}
const obj2 = {
    key1 : "ValueUnique",
    key3 : "value3" ,
    key4 : "value4" ,
}
console.log(obj1);

const newObj = { ...obj1, ...obj2}; //consatenation of two object
console.log(newObj);
const newObj2 = { ...obj2, ...obj1}; 
console.log(newObj2);

const newobj3 = {..."abcdefghijklmnopqrstuvwxyz"}
// this will spread the string and the index will become the key 
console.log(newobj3);