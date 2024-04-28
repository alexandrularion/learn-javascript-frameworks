import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  background-color: var(--background-color-2);
  border-radius: 5px;
  width: 200px;
  padding: 0 18px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);

  select {
    height: 100%;
    width: 100%;
    background: none;
    border: none;
    outline: none;

    option {
      font-size: var(--text-size-2);
      color: var(--text-color-2);
      font-weight: 400;
    }
  }
`;
export default Container;
