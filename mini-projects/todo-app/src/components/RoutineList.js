import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateRoutine, deleteRoutine } from "../reducer/Controller";
import { useState } from "react";

const RoutineListWrapper = styled.div``;

const Title = styled.div`
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

const RoutineList = () => {
  const dispatch = useDispatch();
  const routineList = useSelector((state) => state.add.routines);

  return (
    <>
      {routineList.map((routine) => (
        <RoutineListItem
          key={routine.id}
          routine={routine}
          dispatch={dispatch}
        />
      ))}
    </>
  );
};

const RoutineListItem = ({ routine, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedTime, setEditedTime] = useState("");
  const [checked, setChecked] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
    setEditedTitle(routine.title);
    setEditedTime(routine.time);
  }

  const handleUpdate = () => {
    dispatch(
      updateRoutine({ id: routine.id, title: editedTitle, time: editedTime })
    );
    setEditMode(false);
  };


  const handleDelete = () => {
    dispatch(deleteRoutine({ id: routine.id }));
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <>
      <RoutineListWrapper>
        <Title checked={checked}>
          {editMode ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            routine.title
          )}
        </Title>

        <Time checked={checked}>
          {editMode ? (
            <input
              type="time"
              value={editedTime}
              onChange={(e) => setEditedTime(e.target.value)}
            />
          ) : (
            routine.time
          )}
        </Time>
        <Check type="checkbox" checked={checked} onChange={handleCheck} />
        <EditBtn onClick={editMode ? handleUpdate : handleEdit}>
          {editMode ? "Update" : "Edit"}
          </EditBtn>
        <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
      </RoutineListWrapper>
    </>
  );
};
export default RoutineList;
