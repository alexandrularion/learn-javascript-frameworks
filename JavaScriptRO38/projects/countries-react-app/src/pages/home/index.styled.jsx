import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  .home__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .home__cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
  }
`;
export default Container;
