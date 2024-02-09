const fruits = ["りんご", "みかん", "バナナ"];
fruits.push("いちご");
console.log(fruits); // ["りんご", "みかん", "バナナ", "いちご"]

fruits.unshift("もも");
console.log(fruits); // ["もも", "りんご", "みかん", "バナナ", "いちご"]

fruits.pop();
console.log(fruits); // ["もも", "りんご", "みかん", "バナナ"]

fruits.shift();
console.log(fruits); // ["りんご", "みかん", "バナナ"]

console.log(fruits.indexOf("りんご")) // 0
console.log(fruits.indexOf("いちご")) // -1

console.log(fruits.includes("りんご")) // true
console.log(fruits.includes("いちご")) // false

const products = [
  { id: 1, name: "りんご" },
  { id: 2, name: "みかん" },
  { id: 3, name: "バナナ" }
];

const product1 = console.log(products.find(product => product.id === 2)); // { id: 2, name: "みかん" }
const product2 = console.log(products.find(product => product.id === 4)); // undefined


const cloneProducts = [...products];
console.log(cloneProducts); // [{ id: 1, name: "りんご" }, { id: 2, name: "みかん" }, { id: 3, name: "バナナ" }]

cloneProducts.forEach((product, index) => {
  console.log(product);
  console.log(index);
});

console.log(fruits.join("と")); // りんごとみかんとバナナ

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.every(number => number > 0)); // true
console.log(numbers.every(number => number > 3)); // false

console.log(numbers.some(number => number > 3)); // true
console.log(numbers.some(number => number > 5)); // false

console.log(numbers.filter(number => number > 3)); // [4, 5]
console.log(numbers.map(number => number * 2)); // [2, 4, 6, 8, 10]

const splitString = (str) => {
  return str.split(",");
}

console.log(splitString("りんご,みかん,バナナ")); // ["りんご", "みかん", "バナナ"]

try {
  console.log(splitString(123));
} catch (e) {
  alert(e);
}

// 1
let number1 = 3;
let number2 = 5;
console.log(number1 * number2); // 15
number1 = 7;
console.log(number1 * number2); // 35

// 2
let point = 70;
if (point >= 80) {
  console.log("素晴らしい");
} else if (point >= 60) {
  console.log("合格です");
} else {
  console.log("不合格です");
}

// 3
class User {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  sayHello() {
    console.log(`私の名前は${this.firstName}${this.lastName}です。`);
  }
}

// 4
const numberArray = [1, 2, 3];
const maxNumber = (numArray) => {
  const maxNum = Math.max(...numArray);
  if (maxNum % 3 === 0) {
    return maxNum / 3;
  } else {
    return maxNum;
  }
}
console.log(maxNumber(numberArray)); // 5

// 5
let message = 'This is a pen.';
const splitStringHyphen = (str) => {
  return str.split(" ");
}
console.log(splitStringHyphen(message).join("-")); // ["This is a pen."]

// 6
const numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = (numArray) => {
  return numArray.filter(number => number % 2 === 0);
}
console.log(evenNumber(numberArray2).map(number => number * 5)); // [10, 20, 30, 40, 50]
