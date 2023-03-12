import styled from "styled-components";

const IntroStyle = styled.div`
  /* 정렬 설정 */
  display: flex;
  align-items: center;
  text-align: left;
  background-color: none;
  width: 90vw;
  height: 90vh;

  /* border 디자인 설정 */
  border-style: solid;
  border: 5px solid #a76225;
`;

const InnerContents = styled.div`
  /* 구글폰트 설정 */
  @import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');

  /* 박스 설정 */
  margin: 50px;

  /* font 디자인 설정 */
  font-family: 'Tilt Prism', cursive;
  text-shadow: 4px 2px 2px gray;
  color: white;
  text-shadow: 2px;
  font-size: 75px;
  line-height: 180%;
`;

const IntroPage = () => {
  return (
    <>
      <IntroStyle>
        <InnerContents>
          Getting
          <br />
          Things
          <br />
          Done
        </InnerContents>
      </IntroStyle>
    </>
  );
};

export default IntroPage;
