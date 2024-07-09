// some common mistakes

const user1 = {
    firstName : "radhika",
    age : 20,
    about : function (){
        console.log(this);
        console.log(this.firstName,this.age);
    }
    };
    const myFunc = user1.about.bind(user1);
    myFunc();