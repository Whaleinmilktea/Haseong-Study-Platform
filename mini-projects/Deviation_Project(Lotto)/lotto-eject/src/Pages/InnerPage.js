import PickNum from "../components/PickNum";

const { default: styled } = require("styled-components");

const BorderBox = styled.div`
  /* 요소 가운데 정렬 설정 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 요소 크기 및 색상 설정 */
  width: 95vw;
  height: 95vh;
  margin-top: -40px;

  /* 테두리 설정 */
  border: 10px solid #fefef1;
`;

const InnerBox = styled.main`
  /* Innerbox의 크기 및 위치 설정 */
  width: 90vw;
  height: 90vh;
  background-color: #010000;
  margin-top: -40px;
  border-radius: 1%;

  /* 두 개의 Circle을 배치하기 위한 설정 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 요소 넘침 설정 */
  overflow: hidden;
`;

const SubCircle = styled.aside`
  /* 종횡비 고정 */
  aspect-ratio: 1/1;

  /* 원 크기 설정 */
  width: 650px;
  height: 650px;
  background-color: red;
  border-radius: 50%;

  /* 원 위치 설정 */
  margin-left: -150px;
  margin-top: 200px;

  /* 원 내부 디자인 설정 */
  background-image: url("https://images.unsplash.com/photo-1600134637836-9d015f520941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  opacity: 0.3;
`;

const MainCircle = styled.article`
  /* 종횡비 고정 */
  aspect-ratio: 1/1;

  /* 원 크기 설정 */
  width: 800px;
  height: 800px;
  background-color: blue;
  border-radius: 50%;

  /* 원 위치 설정 */
  margin-top: 200px;

  /* 배경화면 이미지 및 위치 설정 */
  background-image: url("https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1799&q=80");
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.65;
`;

const TextBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: 0;
  bottom: 0;
  margin-left: 100px;
  margin-bottom: 50px;
`;

const SubText = styled.p`
  color: #F9F5E7;
  margin-left: 10px;
  margin-bottom: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const MainText = styled.div`
  color: #f6f4f4;
  font-size: 60px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 700;
`;

const InnerPage = () => {
  return (
    <>
      <BorderBox>
        <InnerBox>
          <SubCircle></SubCircle>
          <MainCircle>
            <PickNum />
          </MainCircle>
          <TextBox>
            <SubText>Made By Haseong</SubText>
            <MainText>To win, To buy a Ticket</MainText>
          </TextBox>
        </InnerBox>
      </BorderBox>
    </>
  );
};

export default InnerPage;
