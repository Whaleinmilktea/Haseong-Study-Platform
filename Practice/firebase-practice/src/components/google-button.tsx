import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Button = styled.span`
  background-color: white;
  margin-top: 10px;
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

const GoogleButton = () => {
  const navigate = useNavigate();
  const handleButtonClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Button onClick={handleButtonClick}>
      <FcGoogle /> Google 로그인
    </Button>
  );
};

export default GoogleButton;
