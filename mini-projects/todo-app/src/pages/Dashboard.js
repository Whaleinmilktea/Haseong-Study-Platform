import TodoList from "../components/TodoList";
import RoutineList from "../components/RoutineList";
import styled from "styled-components";

const DashBoardWrapper = styled.div``;

const DashBoard = () => {
  return (
    <DashBoardWrapper>
      <p>Routine</p>
      <RoutineList />
      <p>Todo</p>
      <TodoList />
    </DashBoardWrapper>
  );
};

export default DashBoard;