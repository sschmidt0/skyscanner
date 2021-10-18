import PropTypes from 'prop-types';
import { StyledTimeAirportDiv } from './TimeAirportBox.styles';

export const TimeAirportBox = ({ arrival, departure, origen, destination }) => (
  <StyledTimeAirportDiv>
    <div>
      <span>{ departure }</span>
      <span>{ origen }</span>
    </div>
    <div>
      <span>{ arrival }</span>
      <span>{ destination }</span>
    </div>
  </StyledTimeAirportDiv>
);

TimeAirportBox.propTypes = {
  arrival: PropTypes.string,
  departure: PropTypes.string,
  origen: PropTypes.string,
  destination: PropTypes.string,
};
