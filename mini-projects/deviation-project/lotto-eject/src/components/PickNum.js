import styled from "styled-components";

const PickNumContainer = styled.div`
  width: 350px;
  height: 200px;
  margin-top: -150px;
  margin-left: -50px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

const PickNumAria = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size : 2em;
  font-weight: 700;
  margin: 15px;
  width: 110px;
  height: 110px;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`;

const PickNum = (props) => {
  console.log(props.resultNum)

  return (
    <PickNumContainer>
      <PickNumAria>{props.resultNum[0]}</PickNumAria>
      <PickNumAria>{props.resultNum[1]}</PickNumAria>
      <PickNumAria>{props.resultNum[2]}</PickNumAria>
      <PickNumAria>{props.resultNum[3]}</PickNumAria>
      <PickNumAria>{props.resultNum[4]}</PickNumAria>
      <PickNumAria>{props.resultNum[5]}</PickNumAria>
    </PickNumContainer>
  );
};

export default PickNum;
