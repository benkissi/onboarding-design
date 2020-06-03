import styled from "styled-components";
const brandColor = "#296efa";

export const Wrapper = styled.div`
  display: flex;
  /* width: 100%; */
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 2;
`;

export const RightPane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: white;
  background-color: #296efa;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 30%;

  .signin-link {
    color: #296efa;
    font-weight: bold;
  }

  .form {
    display: flex;
    width: 40%;
    flex-direction: column;
  }
`;
