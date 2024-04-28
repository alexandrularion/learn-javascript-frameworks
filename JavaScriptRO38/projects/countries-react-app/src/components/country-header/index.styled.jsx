import styled from "styled-components";

const Container = styled.header`
  display: flex;

  button {
    display: flex;
    align-items: center;
    gap: 10px;
    background: none;
    appearance: none;
    border: none;
    outline: none;
    font-size: var(--text-size);
    color: var(--text-color);
    cursor: pointer;
  }
`;
export default Container;
