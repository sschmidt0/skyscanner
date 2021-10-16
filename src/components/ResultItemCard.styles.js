import styled from 'styled-components';

export const StyledCard = styled.li`
  display: grid;
  grid-template-rows: 50px 1fr 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "companies"
    "info"
    "price";
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  @media screen and (min-width: 700px) {
    grid-template-rows: 1fr;
    grid-template-columns: 100px 1fr 220px;
    grid-template-areas:
      "companies info price";
    padding-right: 0;
  }
`;
