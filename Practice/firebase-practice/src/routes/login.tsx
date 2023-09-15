// TODO 1) CSS제작 => 2) e.listener 로직 작성 => 3) 파이어베이스 연결
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {
  Input,
  Switcher,
  Title,
  Wrapper,
  Error,
  Form,
} from "../components/auth-component";
import GithubButton from "../components/github-button";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || email === "" || password === "") return;
    try {
      // 계정로그인
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>Log into</Title>
      <Form onSubmit={handleSubmitForm}>
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
        {isLoading ? (
          <Input type="submit" value="Loading" />
        ) : (
          <Input type="submit" value="Log In" />
        )}
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        계정이 없으신가요? <Link to="/create-account">회원가입</Link>
      </Switcher>
      <GithubButton />
    </Wrapper>
  );
};

export default Login;
