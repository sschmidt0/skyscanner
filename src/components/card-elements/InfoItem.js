import { useEffect, useState } from 'react';
import { getPlaceName, getStopsNames } from '../../assets/getNames';
import { StyledInfoItemDiv } from './InfoItem.styles';

export const InfoItem = ({ flightData, names }) => {
  const isDirect = flightData.Duration.Stops < 1;
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [duration, setDuration] = useState('');
  const [stopsNumber, setStopsNumber] = useState('');
  const [origenPlace, setOrigenPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  const [stopPlace, setStopPlace] = useState('');

  useEffect(() => {
    setDepartureTime(flightData.Departure.slice(flightData.Departure.length-8, flightData.Departure.length-3));
    setArrivalTime(flightData.Arrival.slice(flightData.Arrival.length-8, flightData.Arrival.length-3));
    setDuration(flightData.Duration < 60
      ? `0h ${flightData.Duration}`
      : (flightData.Duration % 60 === 0)
      ? `${Math.floor(flightData.Duration / 60)}h 00`
      : `${Math.floor(flightData.Duration / 60)}h ${flightData.Duration % 60}`);
    setStopsNumber(flightData.Stops.length > 1 ? `${flightData.Stops.length} stops` : '1 stop');
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (names !== undefined) {
      setOrigenPlace(getPlaceName(flightData.OriginStation, names)[0].Code);
      setDestinationPlace(getPlaceName(flightData.DestinationStation, names)[0].Code);
      setStopPlace(getStopsNames(flightData.Stops, names));
    }
    //eslint-disable-next-line
  }, [names]);

  return (
    <StyledInfoItemDiv>
      <div className="time-place-info">
        <span>{ departureTime }</span>
        <span>{ origenPlace }</span>
      </div>
      <div className="connection-info">
        <span>{ duration }</span>
        <div>
          {
            !isDirect && <>
              <span className="span-red-text">{ stopsNumber }</span>
              <span></span>
              <span>{ stopPlace }</span>
            </>
          }
          { isDirect && <span className="span-green-text">Direct</span> }
        </div>
      </div>
      <div className="time-place-info">
        <span>{ arrivalTime }</span>
        <span>{ destinationPlace }</span>
      </div>
    </StyledInfoItemDiv>
  );
};
