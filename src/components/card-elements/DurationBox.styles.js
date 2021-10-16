import styled from 'styled-components';

export const StyledDurationBox = styled.div`
  position: relative;
  width: 70px;
  height: 39px;
  margin: 5px 40px 5px 0;
  border-right: 1px solid silver;

  span:first-child {
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 20px;
  }

  span:nth-child(2), span:last-child {
    position: absolute;
    right: -5px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid silver;
    background-color: #fff;
  }

  span:nth-child(2) {
    top: -4px;
  }

  span:last-child {
    bottom: -4px;
  }
`;
