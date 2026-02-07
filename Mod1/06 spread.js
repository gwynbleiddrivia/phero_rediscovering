const numbers = [87,8,5,91]
console.log(numbers)
console.log(...numbers)

//Just space-separated elements of an array


const max = Math.max(21, 56, 94, 112, 54, 23);
console.log(max);
//But Math.max(numbers) won't work. Math.max will not work with arrays. If I input an array to print out the maximum element, I will just get NaN. It will not work with comma separated values. I have to use space separated values to use Math.max. So spread operated comes in handy here.

console.log(Math.max(...numbers))



// Javascript has a weird behavior
// If we assign an array into a variable, then push an element into that assigned variable, the main array also gets modified

//const first = [1, 2, 3, 4, 5]
//const second = first;
//second.push(6)
//console.log(first)

const first = [1, 2, 3, 4, 5]
const second = [...first];
second.push(6);
console.log(first);
console.log(second);
const third = [...first, 97, 45, 12]
const fourth = [0, ...first];
console.log(third)
console.log(fourth)


//concatenation is also possible here!
const ages = [45, 45, 1]
const prices = [98, 65, 45]
const all = [ ...ages, 5555, ...prices]
console.log(all)

//spread operator work with object too!!

const Person = {name: 'Parmisan', age:25}
const employee = {designation: 'dev', ...Person}
console.log(employee)


//It can also be used in function call!!!
const total = (a,b,c) => a+b+c;
const result = total(45,65,113);
const digits = [78, 55, 66]
console.log(total(...digits))