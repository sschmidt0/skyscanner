import { getAirportLetters } from '../../assets/getAirportLetters';
import { StyledTimeAirportDiv } from './TimeAirportBox.styles';

export const TimeAirportBox = ({ arrival, departure, origen, destination }) => {
  const origenLetter = getAirportLetters(origen);

  return (
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
};
