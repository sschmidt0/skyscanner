import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background: url('/hero-img.webp') no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;

  section {
    width: 100%;

    @media screen and (min-width: 768px) {
      max-width: 880px;
      margin: auto;
      margin: -300px auto 0;
    }

    h1 {
      padding-left: 30px;
      color: #fff;

      @media screen and (min-width: 768px) {
        margin-bottom: 20px;
        font-size: 34px;
      }
    }
  }
`;
