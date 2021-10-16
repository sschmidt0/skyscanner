import { useContext, useState, useEffect } from 'react';
import { filterLegsPerItinerary } from '../assets/filterLegsPerItinerary';
import { SearchContext } from './SearchContext';
import { pollSession } from '../assets/pollSession';
import { ResultItemCard } from "./ResultItemCard";
import { Button } from './moduls/Button';
import { StyledList, StyledLoadingNoResultDiv } from './ResultCardsContainer.styles';
import CircularProgress from '@material-ui/core/CircularProgress';

export const ResultCardsContainer = () => {
  const [sessionURL] = useContext(SearchContext);
  const [data, setData] = useState({});
  const hasKeys = !!Object.keys(data).length;
  const [isExtended, setIsExtended] = useState(false);
  const [names, setNames] = useState('');

  const handleSearch = () => {
    setIsExtended(true);
  };

  console.log(data);

  useEffect(() => {
    pollSession(sessionURL, setData);
  }, [sessionURL]);

  useEffect(() => {
    setNames({
      places: data.Places,
      carriers: data.Carriers
    })
  }, [data]);

  return (
    <>
      {
        hasKeys && data.Itineraries.length > 0 && <>
          <StyledList>
            {
              isExtended && data.Itineraries.map((itinerary, id) => {
                const flightInfo = filterLegsPerItinerary(itinerary, data);

                return <ResultItemCard
                  itinerary={ itinerary }
                  flightInfo={ flightInfo }
                  names={ names }
                  key={ id }
                />
              })
            }
            {
              !isExtended && data.Itineraries.slice(0,3).map((itinerary, id) => {
                const flightInfo = filterLegsPerItinerary(itinerary, data);

                return <ResultItemCard
                  itinerary={ itinerary }
                  flightInfo={ flightInfo }
                  names={ names }
                  key={ id }
                />
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
