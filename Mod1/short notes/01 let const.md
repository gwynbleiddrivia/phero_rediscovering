
console.log(country);
const country= 'BD';
let price = 10;
console.log(price)


Console logging a variable before declaring it (initializing it) will throw a ReferenceError. 
Becausr let and const has scopes
Temporal dead zone?
Reassigning an initialized const variable will thriw a TypeError
But with a const array, you can .push . Just declaring new array would throw that TypeError.
Because if you decare such an array, they would fox the reference in our comp memory. I can modify new things, add new memory, but assigned location im the memory don't get changed.
Or you can also change tbe property of a const object.
const student = {name: 'jaglul', marks: 50}
student = {} would throw error, that would be reassignment

But student.marks = 60 would work


Interview -> diff betn let var const