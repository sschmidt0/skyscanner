import PropTypes from 'prop-types';
import { InfoItem } from './InfoItem';
import { StyledInfoDiv } from './TravelInfoBox.styles';

export const TravelInfoBox = ({ flightItemOut, flightItemIn, names }) => {
  console.log('typeof', typeof flightItemOut); console.log('typeof', typeof flightItemIn); console.log('typeof', typeof names);
  return(
  <StyledInfoDiv>
    <InfoItem
      flightData={ flightItemOut }
      names={ names }
    />
    <InfoItem
      flightData={ flightItemIn }
      names={ names }
    />
  </StyledInfoDiv>
);};

TravelInfoBox.propTypes = {
  flightItemOut: PropTypes.object,
  flightItemIn: PropTypes.object,
  names: PropTypes.object,
};
