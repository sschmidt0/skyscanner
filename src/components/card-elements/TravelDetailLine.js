import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPlaceName } from '../../assets/getNames';
import { DurationBox } from "./DurationBox";
import { TimeAirportBox } from './TimeAirportBox';
import { StyledTravelDetailDiv } from './TravelDetailLine.styles';

export const TravelDetailLine = ({ flightData, names }) => {
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [duration, setDuration] = useState('');
  const [origenPlace, setOrigenPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

  useEffect(() => {
    setDepartureTime(flightData.Departure.slice(flightData.Departure.length-8, flightData.Departure.length-3));
    setArrivalTime(flightData.Arrival.slice(flightData.Arrival.length-8, flightData.Arrival.length-3));
    setDuration(flightData.Duration < 60
      ? `0h ${flightData.Duration}`
      : (flightData.Duration % 60 === 0)
      ? `${Math.floor(flightData.Duration / 60)}h 00`
      : `${Math.floor(flightData.Duration / 60)}h ${flightData.Duration % 60}`);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (names !== undefined) {
      setOrigenPlace(getPlaceName(flightData.OriginStation, names)[0].Name);
      setDestinationPlace(getPlaceName(flightData.DestinationStation, names)[0].Name);
    }
    //eslint-disable-next-line
  }, [names]);

  return (
    <StyledTravelDetailDiv>
      <DurationBox duration={ duration } />
      <TimeAirportBox
        arrival={ arrivalTime }
        departure={ departureTime }
        origen={ origenPlace }
        destination={ destinationPlace }
      />
    </StyledTravelDetailDiv>
  );
};

TravelDetailLine.propTypes = {
  flightData: PropTypes.object,
  names: PropTypes.array,
};
