import styled from 'styled-components';

export const ContainerDiv = styled.div`
  padding: 30px;
  border-radius: 5px;
  background-color: #031326;
  color: #fff;

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
      grid-template-rows: 1fr 26px 1fr;
      grid-template-columns: 1fr;

      @media screen and (min-width: 517px) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 26px 1fr;
      }

      @media screen and (min-width: 920px) {
        display: flex;
      }
    }

    .direction-change-icon {
      justify-self: center;
      margin-top: 10px;
      width: 20px;
      height: 20px;

      &:hover {
        cursor: pointer;
      }

      @media screen and (min-width: 517px) {
        align-self: flex-end;
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }

    .second-row-dates {
      display: grid;
      grid-template-areas:
        "inputA inputB"
        "button button";
      padding: 20px 0;

      div:first-child {
        grid-area: inputA;
      }

      div:last-child {
        grid-area: inputB;
      }

      button {
        grid-area: button;
      }

      @media screen and (min-width: 517px) {
        grid-template-areas:
          "inputA inputB button";
      }

      @media screen and (min-width: 920px) {
        display: flex;
        padding: 0;
      }
    }
  }
`;
