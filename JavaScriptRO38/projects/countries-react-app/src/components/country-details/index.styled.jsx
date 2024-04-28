import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 700px 50%;
  place-items: center;
  width: 100%;

  .card__flag {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
  }
  .card__layout {
    display: flex;
    flex-direction: column;
    place-self: center end;
    gap: 35px;

    h2 {
      font-size: var(--heading-size-3);
      font-weight: 900;
      padding-bottom: 10px;
    }
  }
  .layout__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 25px;

    .content__item {
      display: flex;
      gap: 5px;
      span {
        font-size: inherit;
        font-weight: 600;
      }
      p {
        font-size: var(--text-size-2);
        font-weight: 200;
      }
    }
  }
  .layout__borders {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      font-size: inherit;
      font-weight: 600;
    }
    p {
      background-color: var(--background-color-2);
      padding: 5px 10px;
      border-radius: 5px;
      font-size: var(--text-size-2);
      font-weight: 200;
    }
  }
`;
export default Container;
