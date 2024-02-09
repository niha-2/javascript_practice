const product = {
  name: "りんご",
  price: 120,
  sayDescription: () => {
    console.log("とっても甘いです");
  },
};

product.sayDescription();

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // メソッド
  sayDescription() {
    console.log(`${this.name}の値段は${this.price}円です。`);
  }

  static sayFuncDetail() {
    console.log("productのオブジェクトを作るコンストラクターです");
  }
}

const product1 = new Product("りんご", 120);
const product2 = new Product("みかん", 100);
const product3 = new Product("バナナ", 150);
product1.sayDescription();
product2.sayDescription();
product3.sayDescription();
Product.sayFuncDetail();

product.stack = 100;
console.log(product.stack);

delete product.stack;
console.log(product);

// プリミティブ型の変数は値をコピーした際に、元の値を上書きしてもコピ―先は変わらない
// constで定義したものは値を変更することができない

// オブジェクト型の変数は参照をコピーした際に、元の値を上書きするとコピー先も変わる
// constで定義しても、keyや要素を変更することができる

const p1 = {
  name: "りんご",
  price: 120,
};

const p2 = p1;
p1.name = "みかん";

// スプレット構文
const p3 = { ...p1 };

//  Mathオブジェクト
console.log(Math.random());
console.log(Math.random());

console.log(Math.round(1.6)); // 2
console.log(Math.ceil(1.6)); // 2 切り上げ
console.log(Math.floor(1.6)); // 1 切り捨て

console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1

// Stringオブジェクト
// const message = "Hello World";
const message = new String("Hello World");

console.log(message.length); // 11
console.log(message[0]); // H

console.log(message.includes("Hello")); // true

console.log(message.indexOf("World")); // 6

console.log(message.replace("Hello", "Hi")); // Hi World

console.log("a,b,c,d".split(",")); // ["a", "b", "c", "d"]

const now = new Date();
console.log(now);

const date1 = new Date("2021-01-01");
console.log(date1);

const date2 = new Date(2021, 0, 1);
console.log(date2);

console.log(now.getFullYear()); // 2021

console.log(now.getMonth()); // 0
console.log(now.getDate()); // 1
console.log(now.getDay()); // 5
