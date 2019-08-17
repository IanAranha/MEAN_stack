const math = require ('./mathlib.js')();
console.log(math);
// add two numbers (e.g. math.add(2,3) should return 5)
console.log(math.add(2,3))
// multiply two numbers (e.g. math.multiply(3,5) should return 15)
console.log(math.multiply(3,5))
// square a number (e.g. math.square(5) should return 25)
console.log(math.square(5))
// return a random number between the two numbers 
//(e.g. math.random(1,35) should return a random number between 1 and 35)
console.log(math.random(1, 35))