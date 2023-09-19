import { styled } from "styled-components";

const Form = styled.form``;
const TextArea = styled.textarea``;
const AttachFileButton = styled.label``;
const AttachFileInput = styled.input`
  display: none;
`;
const SubmitButton = styled.input``;

const PostTweetForm = () => {
  return (
    <Form>
      <TextArea placeholder="무슨 일이 일어나고 있나요?" />
      <AttachFileButton htmlFor="file">Add photo</AttachFileButton>
      <AttachFileInput id="file" type="file" accept="image/*" />
      <SubmitButton type="submit"/>
    </Form>
  );
};

export default PostTweetForm;
