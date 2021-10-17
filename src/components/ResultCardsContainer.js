import { useContext, useState, useEffect } from 'react';
import { filterLegsPerItinerary } from '../assets/filterLegsPerItinerary';
import { SearchContext } from './SearchContext';
import { pollSession } from '../assets/pollSession';
import { ResultItemCard } from "./ResultItemCard";
import { Button } from './moduls/Button';
import { StyledList, StyledLoadingNoResultDiv } from './ResultCardsContainer.styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FilterLine } from './FilterLine';

export const ResultCardsContainer = () => {
  const [sessionURL] = useContext(SearchContext);
  const [data, setData] = useState({});
  const hasKeys = !!Object.keys(data).length;
  const [isExtended, setIsExtended] = useState(false);
  const [names, setNames] = useState('');
  const [isDirectSelected, setIsDirectSelected] = useState(true);
  const [isOneStopSelected, setIsOneStopSelected] = useState(true);
  const [isMultipleStopSelected, setIsMultipleStopSelected] = useState(true);
  const [sliceEnd, setSliceEnd] = useState(3);

  const handleSearch = () => {
    setIsExtended(true);
    setSliceEnd(data.Itineraries.length);
  };

  console.log(data);

  useEffect(() => {
    const filters = {
      isDirectSelected,
      isOneStopSelected,
      isMultipleStopSelected
    };
    pollSession(sessionURL, setData, filters);
  }, [sessionURL, isDirectSelected, isOneStopSelected, isMultipleStopSelected]);

  useEffect(() => {
    setTimeout(() => {
      pollSession(sessionURL, setData);
    }, 120000);
  }, [sessionURL]);

  useEffect(() => {
    setNames({
      places: data.Places,
      carriers: data.Carriers
    });
  }, [data]);

  return (
    <>
      {
        hasKeys && data.Itineraries.length > 0 && <FilterLine
          isDirectSelected={ isDirectSelected }
          setIsDirectSelected={ setIsDirectSelected }
          isOneStopSelected={ isOneStopSelected }
          setIsOneStopSelected={ setIsOneStopSelected }
          isMultipleStopSelected={ isMultipleStopSelected }
          setIsMultipleStopSelected={ setIsMultipleStopSelected }
        />
      }
      {
        hasKeys && data.Itineraries.length > 0 && <>
          <StyledList>
            {
              data.Itineraries.slice(0,sliceEnd).map((itinerary, id) => {
                const flightInfo = filterLegsPerItinerary(itinerary, data);

                if ((isDirectSelected && flightInfo.outboundFilteredIdLegs.Stops.length === 0 && flightInfo.inboundFilteredIdLegs.Stops.length === 0) ||
                (isOneStopSelected && ((flightInfo.outboundFilteredIdLegs.Stops.length === 1 && flightInfo.inboundFilteredIdLegs.Stops.length <= 1) || (flightInfo.outboundFilteredIdLegs.Stops.length <= 1 && flightInfo.inboundFilteredIdLegs.Stops.length === 1))) ||
                (isMultipleStopSelected && (flightInfo.outboundFilteredIdLegs.Stops.length > 1 || flightInfo.inboundFilteredIdLegs.Stops.length > 1))) {
                  return <ResultItemCard
                    itinerary={ itinerary }
                    flightInfo={ flightInfo }
                    names={ names }
                    key={ id }
                  />
                };
                return(<></>);
              })
            }
          </StyledList>
          {
            !isExtended && <Button
              text="Load more"
              handleSearch={ handleSearch }
            />
          }
        </>
      }
      {
        hasKeys && data.Itineraries.length === 0 && <StyledLoadingNoResultDiv>
          <p>Sorry, there are no results for this search</p>
        </StyledLoadingNoResultDiv>
      }
      { !hasKeys && <StyledLoadingNoResultDiv>
          <CircularProgress />
        </StyledLoadingNoResultDiv>
      }
    </>
  )
};
