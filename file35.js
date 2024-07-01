// function returning function

 const myFunc = () => {
    return [1,2,3];
}

// we can return almost anything using a function but the crazy part starts when we start returning a function using function

const ans = myFunc();
console.log(ans);




const myFunc1 = () => {
    function hola(){
        console.log("Hola amigo, kaise ho thik ho?");
    }
    return hola;
}

const ans2 = myFunc1(); 
ans2();    // it has became a function expression