const poem = 'am pata jora jora'
const poem2 = `am pata
jora jora`;
console.log(poem2);
console.log(poem);


function sum(num1, num2,){
    const res = num1 + num2;
    //const output = "sum of " + num1 + " and " + num2 + " is " + res;
    const output = `sum of ${num1} and ${num2} is ${res}`;
    console.log(output);
}

sum(12, 23);