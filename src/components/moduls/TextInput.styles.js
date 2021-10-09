import styled from 'styled-components';

export const StyledTextInput = styled.div`
  position: relative;

  label {
    display: block;
  }

  div {
    display: flex;
    align-items: center;
    height: 40px;
    margin-right: 10px;
    margin-top: 8px;
    padding-left: 3px;
    background-color: #fff;
    border-radius: 3px;

    svg {
      width: 26px;
      height: 26px;
      color: silver;
    }

    input {
      width: 100%;
      padding: 10px;
      border-radius: 3px;
      border: none;
      outline: none;
    }
  }
`;
