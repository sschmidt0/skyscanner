import styled from 'styled-components';

export const StyledPlaceList = styled.ul`
  position: absolute;
  top: 90px;
  left: 0;
  width: 88%;
  max-height: 270px;
  margin: 0;
  padding: 0 20px;
  color: #000;
  background-color: #fff;
  list-style-type: none;
  border-radius: 3px;
  overflow-y: scroll;
  z-index: 3;

  li {
    display: flex;
    align-items: center;
    padding: 10px 0;
    font-size: 13px;
    border-bottom: 1px solid silver;

    &:last-child {
      border: none;
    }

    &:hover {
      cursor: pointer;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      span:last-child {
        font-size: 12px;
        font-style: italic;
      }
    }

    svg {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      color: silver;
    }
  }

`;
