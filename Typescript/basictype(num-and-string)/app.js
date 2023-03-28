var inputOne = document.getElementById("num1");
var inputTwo = document.getElementById("num2");
var testBtn = document.querySelector("button");
function add(a, b) {
    return a + b;
}
function printResult(result) {
    console.log(result);
}
testBtn.addEventListener("click", function () {
    var num1 = +inputOne.value;
    var num2 = +inputTwo.value;
    var result = add(num1, num2);
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
