import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import Timeline from "../components/timeline";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll; // 트윗이 view에서 차지하는 공간은 그대로 두고, 트윗 내부에서 스크롤로 내용을 파악할 수 있도록
  scrollbar-width: none;
  grid-template-rows: 1fr 5fr;
`;

const Home = () => (
  <Wrapper>
    <PostTweetForm />
    <Timeline />
  </Wrapper>
);

export default Home;
