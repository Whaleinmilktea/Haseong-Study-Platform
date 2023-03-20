const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const courseLink = document.querySelector("a");

const onLoginSubmit = (info) => {
  info.prevenDefault();
  console.log(info);

  // const username = loginInput.value;
  // console.log(username)
};


loginForm.addEventListener("submit", onLoginSubmit)

const alertLink = () => {
  alert("clicked!!!");
}

// function() ===> JS가 함수를 즉시 실행할.

// const onLoginSubmit = (info) => {
//   info.prevenDefault();
//   console.log(info);
// };

// 자바스크립트는 인수로 받은 info를
// 다음에 실행할 addEvnetListner가 event를 감지할 때에
// 실행될 onloginSubmit 함수에 전달받은 arg를 참조값으로 전달한다.

courseLink.addEventListener("click", alertLink);