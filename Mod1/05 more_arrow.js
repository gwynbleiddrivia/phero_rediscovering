//normal arrow function
const getTAX = (amount, taxRate) => (amount * taxRate)/100;
const add = (p, q) => p+q;


// single parameter

const getSquare = (x) => x**2;
getSquare(31); 
console.log(getSquare(31))

const firstElement = nums => nums[0];

const logIt = (x) => console.log(78)
console.log(logIt());
//undefined, coz console log returns nothing

//anonymous function
//document.getElementById('').addEventListener('click', () => {
    //anonymous function
//})


//document.getElementById('btn-click').addEventListener('click', event => {
    // function
//})


//In normal function, if I do this
// function test(a,b){
//  console.log(arguments); // [a,b]
//}
//test(1,2)
//It will just console log [a,b]
//In normal function, if I do this
function test(a,b){
  console.log(arguments); // [a,b]
}
console.log(test(1,2));
//No it prints this, Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]

