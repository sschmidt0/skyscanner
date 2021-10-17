import { DurationBox } from "./DurationBox";
import { TimeAirportBox } from './TimeAirportBox';
import { StyledTravelDetailDiv } from './TravelDetailLine.styles';

export const TravelDetailLine = ({ duration, arrival, departure, origen, destination }) => (
  <StyledTravelDetailDiv>
    <DurationBox duration={ duration } />
    <TimeAirportBox
      arrival={ arrival }
      departure={ departure }
      origen={ origen }
      destination={ destination }
    />
  </StyledTravelDetailDiv>
);
