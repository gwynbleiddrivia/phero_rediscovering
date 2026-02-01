
function sum (num1, num2){
    const total = num1 + num2;
    console.log(total);
}

sum(10,20 );

Here, during function declaration, num1 and num2 are parameters
And during function call, 10 and 20 are arguments
If I input 30 after 10 or 20, the compiler would just ignore the later arguments, no error
But if I input less arguments than parameters, the missing places would throw undefined. And 10+undefined is NaN
So (num1, num2, total) will be 10 undefined NaN

For handling this error, the concept of default parameter comes into view. 
তুমি যদি মান দাও আমি তাহলে মালটাকে নিব তুমি যদি না দিয়ে থাকো তাহলে আমি ডিফল্ট মানটাকে নিব
যদি function sum(num1, num2=0) দেওয়া হয় আর
sum(10) করা হয়
আউটপুট হবে
10,0,10
sum(10, 40) করা হয়
আউটপুট হবে
10,40,50

ডিফল্ট মান তখনই কাজ করবে যখন তুমি ফাংশন কে কল করার সময় কোন মান না দিয়ে থাকো , দিয়ে থাকলে সে ক্ষেত্রে দিয়ে দেওয়াটা নিবে

Thumb rules
add, substract er time default 0
multiply er time deafult 1
boolean true or false
string ''
array [ ]
object { }

যদি চান্স থাকে যে সবগুলি প্যারামিটার এর মান আমি নাও পাইতে পারি, সে ক্ষেত্রে ডিফল্ট ইউজ করতে পারি 