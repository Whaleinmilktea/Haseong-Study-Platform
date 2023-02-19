const numbers = [1, 2, 3];
// [num1, num2] = numbers; // 1 2
[num1, ,num2] = numbers; // 1 3
console.log(num1, num2);

