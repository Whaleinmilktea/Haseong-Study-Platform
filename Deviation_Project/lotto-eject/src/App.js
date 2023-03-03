import "./App.css";
import PickNum from "./components/PickNum";
import OuterPage from "./Pages/OuterPage"
// 번호를 발생시키는 함수를 체이닝한 뒤에 props로 각 컴포넌트에 내려주기!
// why? 컴포넌트간 중복 번호를 체크하는 것보다 함수진행속도가 빠르기 때문!
// 겹치지 않는 6자리 수 생성 완료

let lottoNum = []
for (let i=0; i<6; i++) {
  let eachNum = Math.floor(Math.random() * 44);
  for (let j in lottoNum) {
    if(eachNum === lottoNum[j]) {
      let eachNum = Math.floor(Math.random() * 44);
    }
  }
  lottoNum.push(eachNum)
}
console.log(lottoNum)

function App() {
  return <div className="App">
    <OuterPage />
  </div>;
}

export default App;
