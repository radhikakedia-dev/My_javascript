// CALL APPLY BIND

// function hello(){
//     console.log("Hello World!");
// }

// hello.call();


// const user1 = {
//     firstName : "Radhika",
//     age :20,
//     about : function(hobby , favSinger){
//         console.log(this.firstName , this.age,hobby,favSinger);
//     }
// };
// const user2 = {
//     firstName : "Neha" ,
//     age : 28,
// };
// user1.about.call(user2,"coding","arijit singh");


function about(hobby , favSinger){
    console.log(this.firstName , this.age , hobby , favSinger);
}

const user1 = {
    firstName : "Radhika",
    age :20
};

const user2 = {
    firstName : "Neha" ,
    age : 28,
};

//call
about.call(user2, "coding" , "arijit singh");

//apply (in the form of array)
about.call(user2, ["coding" , "arijit singh"]);  

//bind (returns something)
const func = about.bind(user1,"guitar","imagin dragons");
func();