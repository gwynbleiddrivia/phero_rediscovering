//function decalaration
// I can call this even before declaration
console.log(add(5,7));
function add(num1, num2){
    return num1 + num2;
}

//function expression
// to insert the return of a function into a variable
const addition = function(num1, num2){
    return num1+num2   
}

console.log(addition(17,15))


// a function will return undefined if you do not return anything

//arrow function

const sum = (num1, num2) => num1 + num2

console.log(sum(2,3))

//in arrow function, you don;t have to manually return anything, it impicitly does this thing
//declare a variable, right side e bracket e parameter, then arrow, then the return

const sumAll = (a,b,c,d,e) => a + b+ c+ d + e;
// these are one liner arrow function

const isFirstBig = (x,y) => x > y;
console.log(isFirstBig(5,6));


//Multi Line arrow function

const doMath = (x, y) => {
    const maleDouble = x*2;
    const againDouble = y*2;
    const result = maleDouble + againDouble
    return result;
}

console.log(doMath(7,9));
// IMPORTANT -- In multi line arrow function, the value does not return implicitly like the one-liner, we have to explicitly return a value for the function