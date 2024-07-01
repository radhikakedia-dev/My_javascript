// callback function

function callback(){
    console.log("radhika is calling a callback");
}

function addition(a,b,callback){
    var result = a+b;
    console.log("result:", result);
    callback();
}
addition(3,4,callback);

// we can also write the function inline or external, it doesn't matter

addition(2,3,function(){
    console.log("addition completed");
})

