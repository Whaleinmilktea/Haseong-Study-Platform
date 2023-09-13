// TODO 1) CSS제작 => 2) e.listener 로직 작성 => 3) 파이어베이스 연결
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;
const Title = styled.h1`
  font-size: 42px;
`;

const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

const CreateAccount = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || name === "" || email === "" || password === "") return;
      try {
        // 계정생성
        setIsLoading(true)
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(credentials.user)
        // 유저 이름 설정
        // 홈페이지로 리다이렉트
        await updateProfile(credentials.user, {
          displayName: name
        })
        navigate("/")
      } catch (e) {

      } finally {
        setIsLoading(false);
      }
  };

  return (
    <Wrapper>
      <Title>Create Account</Title>
      <Form onSubmit={handleSubmitForm}>
        <Input
          onChange={handleChangeForm}
          name="name"
          value={name}
          placeholder="Name"
          type="text"
          required
        />
        <Input
          onChange={handleChangeForm}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          onChange={handleChangeForm}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          required
        />
        <Input type="submit" value="Create Account" />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
    </Wrapper>
  );
};

export default CreateAccount;
