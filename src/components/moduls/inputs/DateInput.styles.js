import styled from 'styled-components';

export const StyledDateInput = styled.div`
  position: relative;

  label {
    display: block;
  }

  div {
    display: flex;
  }

  input {
    width: calc(100% - 20px);
    height: 20px;
    margin-top: 8px;
    padding: 10px;
    border-radius: 3px;
    border: none;
    outline: none;
  }

  .error-span {
    position: absolute;
    bottom: -20px;
    padding-top: 3px;
    color: red;
  }
`;
