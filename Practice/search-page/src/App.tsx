import React, { useState } from "react";
import styled from "styled-components";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #232d3f;
`;
const Title = styled.div`
  color: #f5f7f8;
  font-size: 40px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  margin-bottom: 30px;
`;
const Form = styled.form``;

function App() {
  const [plat, setPlat] = useState("naver");
  const [val, setVal] = useState("");

  const handleSelect = (event: SelectChangeEvent) => {
    setPlat(event.target.value);
    console.log(plat);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e && val !== "") {
      if (plat === "naver") {
        window.open(
          `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${val}`,
          "_self"
        );
      } else if (plat === "google") {
        window.open(`https://www.google.com/search?q=${val}`, "_self");
      }
    } else if (e && val === "") {
      alert("무의미한 검색은 금지!");
    }
  };

  return (
    <Wrapper>
      <Title>Only Focus Purpose</Title>
      <Form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            width: 600,
            height: 200,
          }}
        >
          <Select variant="standard" sx={{ margin: 1 }} onChange={handleSelect}>
            <MenuItem value={"naver"}>naver</MenuItem>
            <MenuItem value={"google"}>google</MenuItem>
          </Select>
          <TextField
            variant="standard"
            sx={{
              width: 400,
            }}
            label="Search Here"
            onChange={handleInput}
            type="text"
            value={val}
          ></TextField>
        </Box>
      </Form>
    </Wrapper>
  );
}

export default App;
