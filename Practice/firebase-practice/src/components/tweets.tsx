import styled from "styled-components";
import { ITweet } from "./timeline";
import { AiOutlineDelete } from "react-icons/ai";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

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

export default function Tweets({
  id,
  userId,
  username,
  photo,
  tweet,
  createdAt,
}: ITweet) {
  const user = auth.currentUser;
  const timeStamp = new Date(createdAt).toLocaleString();
  const onDelete = async () => {
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

  return (
    <Wrapper>
      <CreatedAt>
        {timeStamp}{" "}
        {user?.uid === userId ? (
          <DeleteButton onClick={onDelete}>
            <AiOutlineDelete />
          </DeleteButton>
        ) : null}
      </CreatedAt>
      <Box>
        <Column>
          <Username>{username}</Username>
          <Payload>{tweet}</Payload>
        </Column>
        <Column>{photo ? <Photo src={photo}></Photo> : null}</Column>
      </Box>
    </Wrapper>
  );
}
