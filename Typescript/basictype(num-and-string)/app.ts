const inputOne = document.getElementById("num1") as HTMLInputElement;
const inputTwo = document.getElementById("num2") as HTMLInputElement;
const testBtn = document.querySelector("button") as HTMLButtonElement;

function add(a: number, b: number) {
  return a + b;
}

function printResult(result) {
  console.log(result);
}

testBtn.addEventListener("click", () => {
  const num1 = +inputOne.value;
  const num2 = +inputTwo.value;
  const result = add(num1, num2);
  printResult(result);
});

// const num1Input = document.getElementById('num1') as HTMLInputElement;
// const num2Input = <HTMLInputElement>document.getElementById('num2');
// const buttonElement = document.querySelector('button');

// function add(a: number, b: number) {
//   return a + b;
// }

// function printResult(result) {
//   console.log(result);
// }

// buttonElement.addEventListener('click', () => {
//   const num1 = +num1Input.value;
//   const num2 = +num2Input.value;
//   const result = add(num1, num2);
//   printResult(result);
// });