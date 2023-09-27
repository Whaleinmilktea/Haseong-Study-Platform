import { BallTriangle } from "react-loader-spinner";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingScreen = () => {
  return (
    <Wrapper>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#1d9bf0"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </Wrapper>
  );
};

export default LoadingScreen;
