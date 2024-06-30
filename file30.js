// block scope vs function scope

//let and const are block scopes
//var is a function scope

{
    let name = "radhika";
     console.log(name);
};

   // console.log(name);   

{
    const name = "radhika";
    console.log(name);
}
    //console.log(name);

{
        var name = "radhika";
    //console.log(name);
}
    console.log(name);

    //we can access var outside the scope but we can't access let and const outside the scope
    