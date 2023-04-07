import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContent } from "../reducer/contentController";

import styled from "styled-components";

const StyledWrapper = styled.div`
  border-style: 1px solid black;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  all: unset;
  width: 300px;

  & input {
    all: unset;
    width: 100%;
    height: 30px;
  }
`;

// * 언제 한번,, input에 들어갈 수 있는 타입 / 밸류 / 이벤트 핸들러를 정리해야겠다.
const StyledInput = styled.input`
  margin-bottom: 10px;
`;

const Addform = () => {
  const [work, setWork] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("todos");
  const dispatch = useDispatch();

  // props로 상태 끌어올리기 함수가 잘 들어오는지 확인
  // console.log(props)

  const handleWorkChange = (e) => {
    setWork(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  // 오전 오후시간에서 분을 30/00분만 선택하도록 설정하는 옵션
  const generateTimeOptions = () => {
    const options = [];

    // 오전 시간 추가
    for (let hour = 0; hour <= 11; hour++) {
      for (let minute of ["00", "30"]) {
        const label = `${hour.toString().padStart(2, "0")}:${minute} AM`;
        const value = `${label}`;
        options.push({ label, value });
      }
    }

    // 오후 시간 추가
    for (let hour = 0; hour <= 11; hour++) {
      for (let minute of ["00", "30"]) {
        const label = `${hour.toString().padStart(2, "0")}:${minute} PM`;
        const value = `${label}`;
        options.push({ label, value });
      }
    }

    return options;
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const isRoutines = type === "routines"; // 루틴인지 아닌지 확인하는 변수 ===> 루틴이면 시간을 입력받지 않음

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!work || !type) {
      alert("Work를 채워주세요!");
      return;
    }
    const newItem = {
      id: Date.now().toString(),
      work,
      date,
      time,
      type,
      check: false,
    };
    // props.handleAddFormSubmit(newItem);
    // 어차피 상태끌어올리기는 새로운 상태를 관리하기 위함! toolkit을 사용하게 됨으로써 더이상 필요없는 코드!
    dispatch(createContent(newItem));
  };

  const storeState = useSelector((state) => state);

  // function checkStore() {
  //   console.log(storeState); // {contents: Array(0), filter: "all"} // Addform에서 slice를 통해 값이 잘 전달되고 있는지 점검하는 식
  // }

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          <StyledInput
            placeholder="할 일"
            type="text"
            value={work}
            onChange={handleWorkChange}
          />
        </label>
        <label>
          <select value={type} onChange={handleTypeChange}>
            <option value="routines">Routines</option>
            <option value="todos">To Do</option>
          </select>
        </label>
        {isRoutines ? (
          <label>
            <input type="date" disabled onChange={handleDateChange} />
          </label>
        ) : (
          <label>
            <input type="date" onChange={handleDateChange} />
          </label>
        )}
        <label>
          <select value={time} onChange={handleTimeChange}>
            {generateTimeOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add</button>
        {/* <button type="button" onClick={checkStore}>
        Check Store
      </button> */}
      </StyledForm>
    </StyledWrapper>
  );
};

export default Addform;
