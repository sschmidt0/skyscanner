import styled from 'styled-components';

export const StyledCompaniesDiv = styled.div`
  grid-area: companies;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 700px) {
    text-align: start;
  }
`;
