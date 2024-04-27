import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--background-color-2);
  border-radius: 5px;
  height: 56px;
  width: 480px;
  padding: 0 34px;
  gap: 24px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);

  input {
    height: 100%;
    width: 100%;
    background: none;
    border: none;
    outline: none;
    font-size: var(--text-size-2);
    color: var(--text-color-2);
    font-weight: 400;

    &::placeholder {
      font-size: var(--text-size-1);
      color: var(--text-color-2);
      font-weight: 400;
    }
  }
`;
export default Container;
