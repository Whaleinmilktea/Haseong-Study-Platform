import React, { useState } from "react";

// 자식 컴포넌트
function ChildComponent(props) {
  const [count, setCount] = useState(0);
  console.log(props);

  function handleButtonClick() {
    setCount(count + 1); // 버튼 클릭 시 count 상태를 1 증가시킴
    props.onButtonClick(count + 1); // 상태 변화를 부모 컴포넌트로 전달함
    console.log(props.onButtonClick(count + 1));
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Click me!</button>
    </div>
  );
}

export default ChildComponent;