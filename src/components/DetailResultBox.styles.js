import styled from 'styled-components';

export const StyledDetailBox = styled.div`
  max-width: 700px;
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  @media screen and (min-width: 700px) {
    margin: 20px auto;
  }

  .connection-overview {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    padding-left: 10px;

    @media screen and (min-width: 700px) {
      flex-direction: row;
    }

    & > div {
      margin-right: 40px;
    }
  }

  .directFlight, .stopFlight {
    display: flex;
    margin-top: 10px;
    padding: 40px 0 20px;
    border-top: 2px solid silver;
  }

  .stopFlight {
    flex-direction: column;

    .connection-div {
      margin: 20px 0;
      padding: 10px;
      color: red;
      background-color: #f9f8fc;
      border-radius: 3px;

      span:first-child {
        display: inline-block;
        width: 70px;
        margin-right: 40px;
      }
    }
  }
`;
