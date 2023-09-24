import styled from "styled-components";
import { ITweet } from "./timeline";

const Wrapper = styled.div``;
const Box = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
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
  padding: 5px;
  font-size: 12px;
  color: gray;
`;

export default function Tweets({ username, photo, tweet, createdAt }: ITweet) {
  const timeStamp = new Date(createdAt).toLocaleString()

  return (
    <Wrapper>
      <CreatedAt>{timeStamp}</CreatedAt>
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
