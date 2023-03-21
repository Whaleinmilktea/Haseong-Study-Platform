const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const onLoginSubmit = (info) => {
  info.preventDefault(); // 브라우저가 원래 해야하는 동작을 막고, 개발자가 원하는 동작을 지시할 수 있음!
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreeting(username)
};

const paintGreeting = (username) => {
  greeting.innerText = `Hello ${username}!`
  greeting.classList.remove("hidden")
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername)
}

// 이는 내가 handleclick을 실행시키는 것이 아닌, 나는 호출만 할 뿐 동작 자체는 자바스크립트가 동작하는 원리에 의거한다.
// JS는 호출하는 순간, 그 함수에 object를 넣는다.
// handleClick() 함수가 실행될 떄 ===> 인자로는 {"click"이벤트가 발생했을 경우 생성되는 정보를 전달}
