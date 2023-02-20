function App() {
  // * Javascript Document Object Mangement에서 아래의 JSX로 구현한 내용을 동일하게 구현하기 위해 작성한 코드
  // * 명령적 작동방식 : 기능을 구현하기 위해 (react에서는 목표로 하는 상태에 도달하기 위해) 달성 과정 전반을 기술(프로그래밍)하는 방식
  // const para = document.createElement('p');
  // para.textContent = "I want to be a developer who increases value";
  // document.getElementById('root').append(para);
  return (
    // * 선언적 작동방식 : 기능을 구현하기 위해 (react에서는 목표로 하는 상태에 도달하기 위해) 달성 과정에 있어서 "필요한 상태"들을 기술하는 방식
    <div>
      <h2>Hello React!</h2>
      <p>I want to be a developer who increases value</p>
    </div>
  );
}

export default App;
