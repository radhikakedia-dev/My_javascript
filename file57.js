const obj1 = {
    key1: "value1",
    key2: "value2",
};

const obj2 = Object.create(obj1);

// by creating a empty array
//const obj3 = {};
// there is one more way to create empty object

console.log(obj2);
console.log(obj2.key1);

//_proto_
//official ecmascript document
//[[prototype]] and __proto__  boh are same
//prototype is different

console.log(obj2.__proto__);