let age = 25;

if (age >= 20) {
  console.log("お酒が飲めます");
} else if (age >= 12 && age <= 15) {
  console.log("ジュースが飲めます");
} else {
  console.log("お酒は飲めません");
}

switch (age) {
  case 12:
  case 15:
  case 18:
    console.log("卒業おめでとうございます。");
    break;
  case 20:
    console.log("成人おめでとうございます！");
    break;
  default:
    console.log(`${age}歳です`);
    break;
}

for (let i = 0; i < 5; i++) {
  console.log("Hello");
}

let i = 0;
while (i < 5) {
  console.log("Hello");
  i++;
}

let product = {
  name: "スマートフォン",
  price: 20000,
}

for (let key in product) {
  console.log(key);
  console.log(product[key]);
}

let fruits = ["りんご", "みかん", "バナナ"];
for (let fruit of fruits) {
  console.log(fruit);
}
