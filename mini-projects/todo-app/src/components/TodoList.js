import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContent, updateContent } from "../reducer/contentController";


const TodoList = () => {
  const [editWork, setEditWork] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((state) => state.contents);
  if (!store) return null;
  const filteredTodos = store.filter((item) => item.type === "todos");

  const handleEdit = (id, work, date, time) => {
    setEditing(true);
    setEditingId(id);
    setEditWork(work);
    setEditDate(date);
    setEditTime(time);
  };

  const handleUpdate = () => {
    dispatch(
      updateContent({
        id: editingId,
        contents: {
          work: editWork,
          date: editDate,
          time: editTime,
        },
      })
    );
    setEditing(false);
    setEditWork("");
    setEditDate("");
    setEditTime("");
  };

  return (
    <>
      {filteredTodos.map((item) => {
        return (
          <div key={item.id}>
            <div className="date">{item.date}</div>
            <div className="time">{item.time}</div>
            {editing && editingId === item.id ? (
              <div>
                <input
                  type="text"
                  value={editWork}
                  onChange={(e) => setEditWork(e.target.value)}
                />
                <input
                  type="date"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                />
                <input
                  type="text"
                  value={editTime}
                  onChange={(e) => setEditTime(e.target.value)}
                />
                <button onClick={handleUpdate}>확인</button>
              </div>
            ) : (
              <div className="work">{item.work}</div>
            )}
            <button
              className="update"
              onClick={() =>
                handleEdit(item.id, item.work, item.date, item.time)
              }
            >
              수정
            </button>
            <button
              className="delete"
              onClick={() => dispatch(deleteContent(item.id))}
            >
              삭제
            </button>
            <input type="checkbox"></input>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;