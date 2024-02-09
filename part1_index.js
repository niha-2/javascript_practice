console.log('Hello World');
let nickname = 'John';
console.log(nickname);
nickname = 'Jane';
console.log(nickname);
const firstName = 'John';
console.log(firstName);

let fruit = "apple";

let age = 20;
let circleRatio = 3.14;
let isAdult = true;

let color;

let box = null;

console.log(typeof fruit);
console.log(typeof age);

let productName = "りんご";
let productPrice = 120;

let product = {
  name: "りんご",
  price: 120,
};
console.log(product);

product.price = 100;
console.log(product.price);

product["price"] = 150;
console.log(product["price"]);

let fruits = ["りんご", "みかん", "バナナ"];
console.log(fruits);

fruits[0] = "banana";
console.log(fruits[0]);

fruits[2] = "grape";
console.log(fruits[2]);

console.log(fruits.length);

const outputProductInfo = (productName, productPrice) => {
  console.log("こんにちは");
  console.log(`${productName}の価格は${productPrice}円です。`);
};
outputProductInfo("りんご", 120);

const add = (number1, number2) => {
  return number1 + number2;
};
console.log(add(1, 2));

let x = 10;
let y = 20;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

console.log(x % y);
console.log(x ** y);

console.log(++x);
console.log(x);
console.log(x++);
console.log(x);

console.log(--y);
console.log(y);
console.log(y--);
console.log(y);

x += 10;
console.log(x);

x -= 10;
console.log(x);

console.log(x > 10);
console.log(x < 5);
console.log(x >= 10);
console.log(x <= 10);

console.log(x === 10);
console.log(x === 5);
console.log(x !== 10);

console.log(1 === "1"); // false
console.log(1 == "1"); // true

let userAge = 20;
let userType = userAge < 20 ? "子供" : "大人";
console.log(userType); // 大人

console.log(1 === 1 && 2 === 2); // true
console.log(x < 10 || x > 5); // true

console.log(!(x > 15)); // false

undefined;
null;
0;
("");
console.log(true && "Hello"); // Hello
console.log(false && "Hello"); // false
console.log(true || "Hello"); // true
console.log(false || "Hello"); // Hello
