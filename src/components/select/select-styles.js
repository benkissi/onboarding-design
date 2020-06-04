import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .tips {
    font-size: 12px;
  }
`;

export const Inner = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 15px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: calc(inherit);
  border: none;

  :hover {
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-image: ${(props) => (props.icon ? `url(${props.icon})` : "")};
  background-size: contain;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform ease-out 0.5s;

  :hover {
    cursor: pointer;
  }
`;

export const SelectItems = styled.div`
  display: flex;
  height: ${(props) => (props.show ? "120px" : 0)};
  transition: all ease-out 0.5s;
`;

export const SelectInner = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
`;

export const SelectItem = styled.div`
  display: flex;
  margin: 5px 5px 10px 5px;
  padding: 5px;

  p {
    margin: 0;
    font-size: 12px;
  }

  :hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;
