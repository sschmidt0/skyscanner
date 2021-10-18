import PropTypes from 'prop-types';
import { StyledDurationBox } from './DurationBox.styles';

export const DurationBox = ({ duration }) => (
  <StyledDurationBox>
    <span>{ duration }</span>
    <span></span>
    <span></span>
  </StyledDurationBox>
);

DurationBox.propTypes = {
  duration: PropTypes.string,
};
