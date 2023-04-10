import TodoList from "../components/TodoList";
import { useState } from "react";
import styled from "styled-components";

const TodoWrapper = styled.div``;

const TodoGoalInputWrapper = styled.div`
  position: relative;
`;

const TodoGoalInput = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
`;

const TodoEditButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const TodoSaveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
const TodoPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [goalInputValue, setGoalInputValue] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Not save the input value to Redux store or database
  };

  return (
    <>
      <TodoWrapper>
        <h3>To do List</h3>
        <TodoGoalInputWrapper>
          <TodoGoalInput
            type="text"
            placeholder="할 일의 우선순위를 파악할 수 있을만한 Core Standard를 적어주세요!"
            value={goalInputValue}
            disabled={!isEditing}
            onChange={(e) => setGoalInputValue(e.target.value)}
          />
          {!isEditing ? (
            <TodoEditButton onClick={handleEditClick}>
              Edit
            </TodoEditButton>
          ) : (
            <TodoSaveButton onClick={handleSaveClick}>
              Save
            </TodoSaveButton>
          )}

        </TodoGoalInputWrapper>
        <TodoList />
      </TodoWrapper>
    </>
  );
};

export default TodoPage;
