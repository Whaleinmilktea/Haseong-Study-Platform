import "./App.css";
import PickNum from "./components/PickNum";
import OuterPage from "./Pages/OuterPage";

let lottoNum = [];
for (let i = 0; i < 6; i++) {
  let eachNum = Math.floor(Math.random() * 45) + 1;
  for (let j in lottoNum) {
    if (eachNum === lottoNum[j]) {
      eachNum = Math.floor(Math.random() * 45) + 1;
    }
  }
  lottoNum.push(eachNum);
}
console.log(lottoNum); // [18, 6, 1, 10, 28, 10]
// 번호를 발생시키는 함수를 체이닝한 뒤에 props로 각 컴포넌트에 내려주기!
// why? 컴포넌트간 중복 번호를 체크하는 것보다 함수진행속도가 빠르기 때문!
// 겹치지 않는 6자리 수 생성 완료

lottoNum.sort((a,b) => a-b); // 모든 로또번호는 오름차순으로 정렬되기에 sort()로 정렬!
console.log(lottoNum); //.

function App() {


  return (
    <div className="App">
       {/* 값을 props로 내려주기 */}
      <OuterPage num={lottoNum}/>
    </div>
  );
}

export default App;
