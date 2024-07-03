// iterables
// what are iterables?
// wherever we can apply for of loop , it's iterable
// array and string


// string
const firstName = "Radhika";
for(let char of firstName){
    console.log(char);
}
 
// array
const items = ["item1" , "item2" ,"item3"];
for(let item of items){
    console.log(item);
}

// object
const users = {
    user1 : "name 1",
    user2 : "name 2",
    user3 : "name 3",
    user4 : "name 4",
};

for(let user of users){
    console.log(user);
}

// objects are not iterable

// array like objects
//those having length property
// and those which can be accessed through index

