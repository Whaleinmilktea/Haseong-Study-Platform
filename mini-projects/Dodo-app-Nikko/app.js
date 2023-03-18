const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const onLoginBtnClick = () => {
  const username = loginInput.value;
  if (username === "") {
    alert("이름을 입력해주세요!")
  } else if (username.length > 15) {
    alert("8자 이내의 이름을 입력해주세요!")
  }
};

loginButton.addEventListener("click", onLoginBtnClick);




