import styled from "styled-components";
import InnerPage from "./InnerPage";

const TitleMessage = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 6vw;
  font-weight: bold;
  margin-top: 20px;
`;

const OuterPage = () => {
  return (
    <>
      <TitleMessage>COMMING SOMETHING NEW</TitleMessage>
      <InnerPage />
    </>
  );
};

export default OuterPage;
