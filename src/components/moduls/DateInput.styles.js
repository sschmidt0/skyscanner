import styled from 'styled-components';

export const StyledDateInput = styled.div`
  label {
    display: block;
  }

  input {
    width: 85%;
    height: 20px;
    margin-top: 8px;
    margin-right: 10px;
    padding: 10px;
    border-radius: 3px;
    border: none;
    outline: none;

    @media screen and (min-width: 920px) {
      width: 110px;
    }
  }
`;
