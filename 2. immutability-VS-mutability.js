// mutable variable
let number = 5;
number = 7;
console.log(number); // 7

// immutable variable 
const number2 = 3;
// number2 = 4; //
// console.log(number2);

// mutable array
let hobbies = ["Reading"];
hobbies.push("Gamming");
console.log(hobbies);

// immutable array (ES5 using concat)
var hobbies2 = ["Swimming"];
var newHobbies2 = hobbies2.concat("Riding");
console.log(newHobbies2);

// immutable array (ES6 using spread operator)
const hobbies3 = ["Swimming"];
const newHobbies3 = [...hobbies3, "Riding"];
console.log(newHobbies3);

// mutable object
let data = {name:"Rendi Wijiatmoko", age:15};
data.age = 18;
console.log(data);

// immutable object (ES5 using Object.assign)
let data2 = {name:"Rendi Wijiatmoko", age:15};
let newData2 = Object.assign({}, data2, {age:18});
console.log(newData2);

// immutable object (ES6 using spread operator)
let data3 = {name:"Rendi Wijiatmoko", age:15};
let newData3 = {...data3, age:18}
console.log(newData3);