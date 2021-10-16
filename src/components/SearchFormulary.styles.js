import styled from 'styled-components';

export const ContainerDiv = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #031326;
  color: #fff;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    max-width: 880px;
    margin: auto;
  }

  label {
    margin-right: 10px;
  }

  .second-row {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    @media screen and (min-width: 920px) {
      flex-direction: row;
    }

    .second-row-airports {
      display: grid;
      grid-template-rows: 1fr 10px 1fr;
      grid-template-columns: 1fr;
      row-gap: 5px;

      @media screen and (min-width: 517px) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 20px 1fr;
        column-gap: 10px;
      }

      @media screen and (min-width: 920px) {
        margin-right: 10px;
      }
    }

    .direction-change-icon {
      justify-self: center;
      margin-top: 7px;
      width: 20px;
      height: 20px;

      &:hover {
        cursor: pointer;
      }

      @media screen and (min-width: 517px) {
        place-self: flex-end stretch;
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }

    .second-row-dates {
      display: grid;
      grid-template-areas:
        "inputA"
        "inputB"
        "button";
      row-gap: 30px;
      padding-top: 30px;

      div:first-child {
        grid-area: inputA;
      }

      div:last-child {
        grid-area: inputB;
      }

      button {
        grid-area: button;
        align-self: flex-end;
      }

      @media screen and (min-width: 444px) {
        grid-template-areas:
          "inputA inputB"
          "button button";
        column-gap: 10px;
      }

      @media screen and (min-width: 544px) {
        grid-template-areas:
          "inputA inputB button";
      }

      @media screen and (min-width: 920px) {
        padding-top: 0;
      }
    }

  }
`;

export const StyledCityDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  color: #fff;
  background-color: #005DC8;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    max-width: 880px;
    margin: auto;
    border-radius: 0 0 5px 5px;
  }

  span {
    font-size: 30px;
  }
`;
