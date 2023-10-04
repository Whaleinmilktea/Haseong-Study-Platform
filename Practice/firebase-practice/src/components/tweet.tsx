import styled from "styled-components";
import { ITweet } from "./timeline";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
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
const PhotoLabel = styled.label``;
const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 15px;
  cursor: pointer;
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
const SaveEditButton = styled.div`
  margin-top: 10px;
  color: #1d9bf0;
`;
const EditPhotoInput = styled.input`
  display: none;
`;

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
  const [tweetPhoto, setTweetPhoto] = useState(photo);

  console.log(`Wapper의 문제인가? : ${id}`)

  const user = auth.currentUser;
  const timeStamp = new Date(createdAt).toLocaleString();

  const deleteTweet = async () => {
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

  const editTweet = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTweet(e.target.value);
  };

  const saveEditTweet = async () => {
    if (!user || tweet === newTweet) setEdit(!edit); // 이전 트윗과 동일할 경우 변경하지 않고, edit 종료
    try {
      await updateDoc(doc(db, "tweets", id), {
        tweet: newTweet,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setEdit(!edit);
    }
  };

  const editPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation() // 이벤트버블링을 막았는데도?
    console.log(id)
    const { files } = e.target;
    const ok = confirm("정말로 트윗의 이미지를 수정하시겠습니까?");
    if (!ok || !user || files === null) return;
    const file = files[0];
    const locationRef = ref(storage, `tweets/${user.uid}${id}`);
    const result = await uploadBytes(locationRef, file);
    const tweetPhotoUrl = await getDownloadURL(result.ref);
    setTweetPhoto(tweetPhotoUrl);
    await updateDoc(doc(db, "tweets", id), {
      photo: tweetPhotoUrl,
    });
  };

  return (
    <Wrapper onClick={() => console.log(`Wapper 클릭 시 : ${id}`)}>
      <CreatedAt>
        {timeStamp}{" "}
        {user?.uid === userId ? (
          <>
            <EditButton onClick={() => setEdit(!edit)}>
              <AiOutlineEdit />
            </EditButton>
            <DeleteButton onClick={deleteTweet}>
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
              <EditArea value={newTweet} onChange={editTweet}></EditArea>
              <SaveEditButton onClick={saveEditTweet}>
                <AiOutlineCheck />
              </SaveEditButton>
            </Payload>
          ) : (
            <Payload>{tweet}</Payload>
          )}
        </Column>
        <Column>
          {photo ? (
            <PhotoLabel htmlFor="edit-photo">
              <Photo src={tweetPhoto}></Photo>
            </PhotoLabel>
          ) : null}
        </Column>
        <EditPhotoInput
          onChange={editPhoto}
          id="edit-photo"
          type="file"
          accept="image/*"
        ></EditPhotoInput>
      </Box>
    </Wrapper>
  );
}
