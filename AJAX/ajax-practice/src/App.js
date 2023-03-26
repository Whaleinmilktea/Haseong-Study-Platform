import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  // 현재 데이터에는 아래와 같은 데이터가 저장되어 있다고 가정한다.
  // POSTMAN으로 http://example.com/api/data에 GET 요청을 보내면 다음과 같은 응답이 전달된다.
  // "data" : [
  //   {
  //     "id": 1,
  //     "name": "brian",
  //   },
  //   {
  //     "id": 2,
  //     "name": "peter",
  //   },
  // ];

  // React에서는 코드 실행 중 발생하는 변화 외에 다른 변화를 뜻하는 Side Effect를 제어하기 위해 useEffect Hook을 사용하기에 이를 활용했다.
  useEffect(() => {
    axios
      .get("http://example.com/api/data") // get요청으로 원하는 데이터를 요청한다.
      .then((res) => {
        // res 변수에 data를 담고
        setData(res.data); // res 변수에 담긴 data 객체에 접근한 뒤 setData에 담아 상태를 업데이트한다.
      })
      .catch((err) => {
        alert(`올바르지 못한 요청입니다 내용 : ${err}`); // 만약,
      });
  }, []);

  useEffect(() => {
    axios
      .put("http://example.com/api/data", { id: 3, name: "Haseong" }) // put 요청으로 변경하고자 하는 데이터를 전달한다.
      .then((res) => setData(res.data)) // 업데이트 된 내용을 setdata에 담아 상태를 변경시켜준다.
      .catch((err) => alert(`올바르지 못한 요청입니다 내용 : ${err}`));
  }, []);

  useEffect(() => {
    axios
      .delete("http://example.com/api/data/3") // put 요청으로 삭제하고자 하는 데이터를 전달한다.
      .then((res) => setData(res.data)) // 정상적으로 처리되었을 경우, setdata에 담아 상태를 변경시켜준다.
      .catch((err) => alert(`올바르지 못한 요청입니다 내용 : ${err}`));
  }, []);

  // fetch를 활용하여 PATCH 메서드로 요청을 보내는 경우
  useEffect(() => {
    fetch("http://example.com/api/data/1", { // axios와 동일하게 주소를 입력한다.
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // JSON 타입으로 보냄을 명시한다.
      },
      body: JSON.stringify({ name: john }), // id가 1인 객체에 들어있는 name : "brian"이 name : "john"으로 대치된다.
    })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => alert(`올바르지 못한 요청입니다 내용 : ${err}`))
  });
    // 위의 JSON.stringify는 JSON 문자열을 자바스크립트 객체로 변환시키기 위한 코드인데,
    // JSON 문자열과 자바스크립트 객체는 얼핏보기에는 비슷하지만 전혀 다른 모양을 갖고 있다.
    // JSON 문자열 : { "name": "John", "age": 30, "city": "New York" }
    // 자바스크립트 객체 : { name: 'John', age: 30, city: 'New York' }

  return (
    <>
      <div>Ajax를 연습해보자!</div>
      {data.map(
        (
          item // 업데이트 된 데이터를 매개변수 item에 할당하고,
        ) => (
          <div key={item.id}>{item.name}</div> // 데이터 중 원하는 내용을 div 내용으로 출력한다.
        )
      )}
    </>
  );
}

export default App;
