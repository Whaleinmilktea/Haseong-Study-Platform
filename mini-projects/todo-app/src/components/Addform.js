import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const AddFormWrapper = styled.div``;

const OpenBtn = styled.button``;

const CloseBtn = styled.button``;

const StyledForm = styled.form``;

const AddForm = () => {
  const [title, setTitle] = useState(""); // 입력한 내용
  const [date, setDate] = useState(""); // 선택한 날짜
  const [time, setTime] = useState(""); // 선택한 시간
  const [routine, setRoutine] = useState(false); // 루틴 체크 여부 ==> 이에 따라 submit 시 store에 추가하는 데이터가 달라짐
  const [todo, setTodo] = useState(false); // 투두 체크 여부
  const [visible, setVisible] = useState(false); // 폼 보이기 여부

  const handleToggleForm = () => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    // console.log(visible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // store에 데이터 추가 === todo와 routine을 구분해서 추가
    const handleRoutineSumit = () => {
      dispatch(addRoutine({ title, time }));
      setTitle("");
      setDate("");
      setTime("");
      setRoutine(false);
      setTodo(false);
    };

    const handleTodoSubmit = () => {
      dispatch(addTodo({ title, date, time }));
      setTitle("");
      setDate("");
      setTime("");
      setRoutine(false);
      setTodo(false);
    };

    if (routine === true) {
      handleRoutineSumit();
    } else {
      handleTodoSubmit();
    }

    // console.log("routine:", routine);
    // console.log("todo:", todo);
  };

  return (
    <AddFormWrapper>
      {visible === false ? (
        <OpenBtn onClick={handleToggleForm}>+</OpenBtn>
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          <input
            className="inputTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="inputRoutine"
            type="checkbox"
            checked={routine}
            onChange={(e) => setRoutine(e.target.checked)}
          />
          <label htmlFor="routine">Routine</label>
          <input
            className="inputTodo"
            type="checkbox"
            checked={todo}
            onChange={(e) => setTodo(e.target.checked)}
          />
          <label htmlFor="todo">To do</label>
          <input
            className="inputDate"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            disabled={routine} // 루틴 체크 시 비활성화
          />
          <input
            className="inputTime"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <CloseBtn onClick={handleToggleForm}>-</CloseBtn>
          <button type="submit" onClick={handleSubmit}>
            Add!
          </button>
        </StyledForm>
      )}
    </AddFormWrapper>
  );
};

export default AddForm;
