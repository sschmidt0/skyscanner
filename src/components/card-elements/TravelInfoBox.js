import { InfoItem } from './InfoItem';
import { StyledInfoDiv } from './TravelInfoBox.styles';

export const TravelInfoBox = ({ flightItemOut, flightItemIn, names }) =>  (
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
);




