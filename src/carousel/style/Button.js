import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  transition: all 0.3 ease;
  font-size: 1.6em;
  background-color: rgba(103, 58, 183, 0.1);
  color: ${disabled ? "#999" : "#333"};
  box-shadow: 0 0 2px 0 #333;
  border-radius: 50%;
  border: none;
  padding: 0;
  width: 50px;
  height: 50px;
  min-width: 50px;
  line-height: 50px;
  align-self: center;
  cursor: pointer;
  outline: none;
  &:hover:enabled,
  &:focus:enabled {
    color: #fff;
    background-color: rgba(103, 58, 183, 1);
    box-shadow: 0 0 2px 0 #333;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
export default Button;