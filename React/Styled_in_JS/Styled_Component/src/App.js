import "./App.css";
import styled from "styled-components";

// Welcome, My Study Platform을 담을 btn 컴포넌트를 생성
const WelcomeHead = styled.h1`
  margin-left : 1rem;
  color: blue;
`;

const WelcomeExplain = styled.h3`
margin-left : 1rem;
color: black;
`

export default function App () {
  return (
  <div>
  <WelcomeHead>Hello, Welcome my study platform</WelcomeHead>
  <WelcomeExplain>I want to become a valuable developer.</WelcomeExplain>
  </div>
  )
};
