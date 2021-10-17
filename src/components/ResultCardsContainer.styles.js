import styled from 'styled-components';

export const StyledList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media screen and (min-width: 700px) {
    width: 700px;
  }
`;

export const StyledLoadingNoResultDiv = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 263px);
`;
