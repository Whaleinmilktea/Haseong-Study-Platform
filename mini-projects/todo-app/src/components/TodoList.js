import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, deleteTodo } from "../reducer/Controller";

const TodoListWrapper = styled.div``;

const Title = styled.div`
  ${(props) =>
    props.checked &&
    `
      text-decoration: line-through;
      color: gray;
    `}
`;

const Date = styled.div`
  ${(props) =>
    props.checked &&
    `
      text-decoration: line-through;
      color: gray;
    `}
`;

const Time = styled.div`
  ${(props) =>
    props.checked &&
    `
      text-decoration: line-through;
      color: gray;
    `}
`;

const Check = styled.input``;

const EditBtn = styled.button``;

const DeleteBtn = styled.button``;


const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.add.todos);

  return (
    <>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
};

const TodoListItem = ({ todo, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [editedTime, setEditedTime] = useState("");
  const [checked, setChecked] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
    setEditedTitle(todo.title);
    setEditedDate(todo.date);
    setEditedTime(todo.time);
  };

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        title: editedTitle,
        date: editedDate,
        time: editedTime,
      })
    );
    setEditMode(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo({
      id: todo.id
    }));
  };

  const handleCheck = () => {
    setChecked(!checked);
  }

  return (
    <TodoListWrapper>
      <Title checked={checked}>{editMode ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        todo.title
      )}</Title>
      <Date checked={checked}>{editMode ? (
        <input
          type="date"
          value={editedDate}
          onChange={(e) => setEditedDate(e.target.value)}
        />
      ) : (
        todo.date
      )}</Date>
      <Time checked={checked}>{editMode ? (
        <input
          type="time"
          value={editedTime}
          onChange={(e) => setEditedTime(e.target.value)}
        />
      ) : (
        todo.time
      )}</Time>
      <Check type="checkbox" onChange={handleCheck} checked={checked}/>
      <EditBtn onClick={editMode ? handleUpdate : handleEdit}>
        {editMode ? "Save" : "Edit"}
      </EditBtn>
      <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
    </TodoListWrapper>
  );
};

export default TodoList;
