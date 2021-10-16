import styled from 'styled-components';

export const StyledInfoItemDiv = styled.div`
  display: flex;
  margin: 0 35px;

  .time-place-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70px;

    &:first-child {
      text-align: right;
    }

    span:first-child {
      font-size: 20px;
    }

    span:last-child {
      color: silver;
    }
  }

  .connection-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 20px;

    span, div {
      width: 100%;
      padding: 10px 0;
      text-align: center;
    }

    div {
      position: relative;
      border-top: 1px solid silver;

      .span-green-text {
        color: #139C8E;
      }

      .span-red-text {
        color: red;
      }

      span:nth-child(2) {
        position: absolute;
        top: -5px;
        display: inline-block;
        width: 10px;
        height: 10px;
        padding: 0;
        border-radius: 50%;
        background-color: red;
      }

      span:last-child {
        margin-left: 10px;
      }
    }
  }
`;
