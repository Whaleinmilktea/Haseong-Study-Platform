import styled from "styled-components";
import "../App.css";
import { BiWorld } from "react-icons/bi";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 8px 28px 0 28px;
  margin: auto;
  text-align: center;
  color: #868e96;
`;

const Logo = styled.div`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg/360px-Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg.png");
  background-size: cover;
  filter: opacity(0.5) drop-shadow(0 0 0 white);
  width: 240px;
  height: 42px;
`;

const HeaderBtn = styled.button`
  all: unset;
`;
const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Header = () => {
  return (
    <div className="header">
      <Wrapper>
        <Logo />
        <HeaderBtn>
          <BiWorld />
        </HeaderBtn>
      </Wrapper>
    </div>
  );
};

export default Header;
