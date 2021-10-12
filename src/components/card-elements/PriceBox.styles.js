import styled from 'styled-components';

export const StyledPriceBox = styled.div`
  grid-area: price;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid silver;

  @media screen and (min-width: 700px) {
    border-top: none;
    border-left: 2px solid silver;
  }

  span {
    padding-bottom: 6px;
  }

  span:first-child {
    color: silver;
  }

  span:nth-child(2) {
    font-size: 24px;
  }

  button {
    width: 100%;

    @media screen and (min-width: 700px) {
      width: 120px;
    }
  }
`;
