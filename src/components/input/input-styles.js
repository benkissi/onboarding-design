import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .tips {
    font-size: 12px;
  }

  .input-error {
    font-size: 12px;
    color: #ff6347;
    margin-bottom: 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 15px 10px;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${(props) => (props.isError ? "#ff6347" : "#ccc")};
  box-sizing: border-box;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: calc(inherit);
  border: none;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-image: ${(props) => (props.icon ? `url(${props.icon})` : "")};
  background-size: contain;
  :hover {
    cursor: pointer;
  }
`;
