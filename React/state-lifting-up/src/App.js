import './App.css';
import ChildComponent from './ChildComponent';

function App() {
  const [childCount, setChildCount] = useState(0);

  function handleChildButtonClick(count) {
    setChildCount(count); // 자식 컴포넌트에서 전달받은 count 상태를 부모 컴포넌트에서 관리함
  }

  return (
    <div>
      <p>Child count: {childCount}</p>
      <ChildComponent onButtonClick={handleChildButtonClick} />
    </div>
  );
}

export default App;
