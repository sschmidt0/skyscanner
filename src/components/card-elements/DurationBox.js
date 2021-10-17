import { StyledDurationBox } from './DurationBox.styles';

export const DurationBox = ({ duration }) => (
  <StyledDurationBox>
    <span>{ duration }</span>
    <span></span>
    <span></span>
  </StyledDurationBox>
);
