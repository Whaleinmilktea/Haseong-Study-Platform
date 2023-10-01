import styled from "styled-components";
import { ITweet } from "./timeline";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { ChangeEvent, useState } from "react";

const Wrapper = styled.div``;
const Box = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;
const Column = styled.div``;
const Username = styled.div`
  font-weight: 600;
  font-size: 15px;
`;
const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`;
const EditArea = styled.textarea`
  border: 1px solid gray;
  padding: 20px;
  font-size: 16px;
  color: white;
  background-color: black;
  width: 90%;
  resize: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`;
const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 15px;
`;
const CreatedAt = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 5px;
  padding: 5px;
  font-size: 12px;
  color: gray;
`;
const DeleteButton = styled.div`
  color: tomato;
  margin-left: 1%;
  :hover {
    scale: 1.2;
    cursor: pointer;
  }
`;
const EditButton = styled.div`
  color: green;
  margin-left: 1%;
  :hover {
    scale: 1.2;
    cursor: pointer;
  }
`;
const EditCancelButton = styled.div``;

export default function Tweet({
  id,
  userId,
  username,
  photo,
  tweet,
  createdAt,
}: ITweet) {
  const [edit, setEdit] = useState(false);
  const [newTweet, setNewTweet] = useState(tweet);

  const user = auth.currentUser;
  const timeStamp = new Date(createdAt).toLocaleString();

  const DeleteTweet = async () => {
    const ok = confirm("정말로 트윗을 제거하시겠습니까?");
    if (!ok || user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, "tweets", id));
      if (photo) {
        const photoRef = ref(storage, `tweets/${user?.uid}${id}`);
        await deleteObject(photoRef);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const EditTweet = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTweet(e.target.value);
  };

  const SaveEditTweet = async () => {

  }

  return (
    <Wrapper>
      <CreatedAt>
        {timeStamp}{" "}
        {user?.uid === userId ? (
          <>
            <EditButton onClick={() => setEdit(!edit)}>
              <AiOutlineEdit />
            </EditButton>
            <DeleteButton onClick={DeleteTweet}>
              <AiOutlineDelete />
            </DeleteButton>
          </>
        ) : null}
      </CreatedAt>
      <Box>
        <Column>
          <Username>{username}</Username>
          {edit ? (
            <Payload>
              <EditArea value={newTweet} onChange={EditTweet}></EditArea>
              <EditCancelButton>
                <AiOutlineCheck />
              </EditCancelButton>
            </Payload>
          ) : (
            <Payload>{tweet}</Payload>
          )}
        </Column>
        <Column>{photo ? <Photo src={photo}></Photo> : null}</Column>
      </Box>
    </Wrapper>
  );
}
