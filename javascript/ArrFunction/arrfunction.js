const products = [
  { name: "iPhone", price: 1000 },
  { name: "Galaxy", price: 800 },
  { name: "iPad", price: 600 },
  { name: "Galaxy Tab", price: 400 },
  { name: "Macbook", price: 1500 },
  { name: "Surface", price: 1200 },
];

// 모든 제품의 가격을 10% 할인한 가격을 구한다.
const discountedPrices = products.map((product) => {
  return { name: product.name, price: product.price * 0.9 };
});

console.log(discountedPrices);
// [{ name: "iPhone", price: 900 }, { name: "Galaxy", price: 720 }, { name: "iPad", price: 540 }, { name: "Galaxy Tab", price: 360 }, { name: "Macbook", price: 1350 }, { name: "Surface", price: 1080 }]

// 가격이 1000 이상인 제품만 골라낸다.
const expensiveProducts = products.filter((product) => product.price >= 1000);

console.log(expensiveProducts);
// [{ name: "iPhone", price: 1000 }, { name: "Macbook", price: 1500 }, { name: "Surface", price: 1200 }]

// 모든 제품의 가격을 합산한다.
const total = products.reduce((acc, product) => acc + product.price, 0);

console.log(total);
// 5300

const arr = [10, 20, 30];
const greaterThanFirst = arr.filter((num, index, array) => num > array[0]);
console.log(greaterThanFirst); // [20, 30]
