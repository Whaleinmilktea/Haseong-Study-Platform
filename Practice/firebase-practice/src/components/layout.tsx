import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div``;
const Menu = styled.div``;
const MenuItems = styled.div``;

const Layout = () => {
  return (
    <Wrapper>
      <Menu>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default Layout;
