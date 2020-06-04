import styled from "styled-components";
import Constants from "../../utils/constants";

const constantsObj = Constants();

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  .highlight {
    color: ${constantsObj.brandColor};
    font-weight: bold;
  }

  .notice {
    font-size: 14px;
    margin-top: 50px;
    line-height: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
  padding-top: 20px;

  .progress {
    position: relative;
    display: flex;
    align-items: center;
    width: 150px;
    /* margin-bottom: auto; */
    align-self: flex-end;
  }
`;

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  .step {
    /* flex: 1; */
  }
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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .form-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
  }

  .form {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .input {
    width: 90%;
    margin: 10px 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  /* height: 100%; */
  /* flex: 1; */

  .actions-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
  }

  .button {
    width: 90%;
    margin-top: 40px;
  }
`;
