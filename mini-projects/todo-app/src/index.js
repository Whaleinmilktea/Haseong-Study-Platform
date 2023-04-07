import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// ? createStore가 왜 작동되지 않는지 모르겠다. = 취소선이 그어지는 이유는! redux toolkit을 사용하기 때문!
// ? 레거시 코드와 그냥 createStore의 차이는 아직 모르겠다.
import { Provider } from "react-redux";
import store from "./store";
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
