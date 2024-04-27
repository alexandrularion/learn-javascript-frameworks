import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-2);
  border-radius: 5px;
  width: 264px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);

  .card__flag {
    height: 160px;
    img {
      width: 100%;
      height: 100%;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
  .card__content {
    display: flex;
    flex-direction: column;
    padding: 25px;
    h2 {
      font-size: var(--heading-size-1);
      font-weight: 900;
      padding-bottom: 10px;
    }
    .content__item {
      display: flex;
      gap: 5px;
      span {
        font-size: inherit;
        font-weight: 600;
      }
      p {
        font-size: var(--text-size);
        font-weight: 200;
      }
    }
  }
`;
export default Container;
