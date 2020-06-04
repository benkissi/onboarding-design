import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  p {
    margin: 0;
    margin-right: 10px;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Circle = styled.div`
  height: 5px;
  width: 5px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
`;
