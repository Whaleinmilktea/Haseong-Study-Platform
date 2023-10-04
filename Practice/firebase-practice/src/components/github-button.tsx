import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs"

const Button = styled.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const GithubButton = () => {
  const navigate = useNavigate()
  const handleButtonClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/")
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Button onClick={handleButtonClick}>
      <BsGithub/> Github 로그인
    </Button>
  );
};

export default GithubButton;
