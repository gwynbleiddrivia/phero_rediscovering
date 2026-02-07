const product = { name: 'shirt', price: 500, quantity: 7}

//const discount = product.price*20/100;
//const yourPay = product.price - discount;
//const vatAmount = product.price*7/100;
//const totalAmount = yourPay + vatAmount;

//Here I have to write down product.price again and again.
//Instead I could do the following
//const price = product.price;

// const discount = price*20/100;
// const yourPay = price - discount;
// const vatAmount = price*7/100;
// const totalAmount = yourPay + vatAmount;

//// But I can be more lazy :3



//const { price } = { name: 'shirt', price: 500, quantity: 7}
//If I do this, then a price variable will be declared, and the value will be 500, just like const price = 500
//This is object destructuring
//console.log(price)
//Or, if I do this
//const {name, quantity, price} = { name: 'shirt', price: 500, quantity: 7}
//console.log(price)
//console.log(name)
//hence the order of the destructuring does not matter

//const {name, quantity, price, tax} = { name: 'shirt', price: 500, quantity: 7}

//console.log(tax)
//the non existing destructuring variable will be undefined

const {name, quantity, price, tax=7} = { name: 'shirt', price: 500, quantity: 7}
console.log(tax)
//I can declare a default value for the destructuring parameter

const device