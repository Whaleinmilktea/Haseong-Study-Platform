import styled from "styled-components";
import RoutineList from "../components/RoutineList";
import TodoList from "../components/TodoList";

export const DividerWrapper = styled.div`
  all: unset;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    color: #333;
  }
`;

const Dashboard = () => {
  return (
    <>
      <h1>Getting Things Done!</h1>
      <DividerWrapper>
        <h1>Routine</h1>
        <RoutineList />
      </DividerWrapper>
      <DividerWrapper>
        <h1>To do</h1>
        <TodoList />
      </DividerWrapper>
    </>
  );
};

export default Dashboard;
