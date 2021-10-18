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
`;

export const LowerDivContainer = styled.div`
  border-top: 2px solid silver;

  .directFlight {
    margin: 30px 0 20px;
  }

  .notDirectFlight {
    display: flex;
    flex-direction: column;
    margin: 30px 0 20px;

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
