import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  background-color: #139C8E;
  border-radius: 3px;
  border: none;

  @media screen and (min-width: 920px) {
    width: 170px;
    margin: 0;
  }

  &:hover {
    cursor: pointer;
  }

  svg {
    margin-left: 10px;
    width: 16px;
    height: 16px;
    color: #fff;
  }
`;
