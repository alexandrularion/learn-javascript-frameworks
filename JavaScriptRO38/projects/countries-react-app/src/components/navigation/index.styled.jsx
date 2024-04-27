import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-color-2);
  height: 80px;
  padding: 0 80px;

  h1 {
    font-size: var(--heading-size-2);
    font-weight: 900;
  }

  button {
    appearance: none;
    border: none;
    outline: none;
    background: none;
    color: var(--text-color);
    font-size: var(--text-size-2);
    font-weight: 600;
  }
`;
export default Container;
