import styled from 'styled-components';

export const SearchContainerDiv = styled.div`
  min-height: 100vh;
  background-color: #f9f8fc;

  section {
    padding-bottom: 20px;
  }

  section > div:first-child {
    @media screen and (min-width: 768px) {
      border-radius: 0 0 5px 5px;
    }
  }
`;


