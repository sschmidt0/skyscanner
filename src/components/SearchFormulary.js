import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { SearchContext } from './SearchContext';
import { validateInput } from '../assets/validateInput';
import { getAirportLetters } from '../assets/getAirportLetters';

import { ContainerDiv, StyledCityDiv } from './SearchFormulary.styles';
import { TextInput } from './moduls/inputs/TextInput';
import { DateInput } from './moduls/inputs/DateInput';
import Icon from '@mdi/react';
import { mdiSwapHorizontalBold } from '@mdi/js';
import { Button } from './moduls/Button';
import { RadioInput } from './moduls/inputs/RadioInput';
import { getPlaceList } from '../assets/getPlaceList';
import { createSession } from '../assets/createSession';

export const SearchFormulary = ({ isDetailPage }) => {
  const history = useHistory();
  const { searchData, setSearchData } = useContext(SearchContext);
  const { sessionURL, setSessionURL } = useContext(SearchContext);
  const today = Date.now();
  const [travelOption, setTravelOption] = useState('return');
  const [origen, setOrigen] = useState(searchData.origen !== '' ? searchData.origen : '');
  const [destination, setDestination] = useState(searchData.destination !== '' ? searchData.destination : '');
  const [departureDay, setDepartureDay] = useState('');
  const [returnDay, setReturnDay] = useState('');
  const [origenPlaceList, setOrigenPlaceList] = useState([]);
  const [destinationPlaceList, setDestinationPlaceList] = useState([]);
  const [isOrigenInputFocused, setIsOrigenInputFocused] = useState(false);
  const [isDestinationInputFocused, setIsDestinationInputFocused] = useState(false);
  const [errors, setErrors] = useState({});
  const regex = /\(\w+\)/;

  const handleDirectionChange = () => {
    setOrigen(destination);
    setDestination(origen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = () => {
    const data = {
      travelOption,
      origen,
      destination,
      departureDay,
      returnDay: travelOption === 'return' ? returnDay : '',
    };

    const sendingData = {
      country: "ES",
      currency: "EUR",
      locale: "en-GB",
      locationSchema: "iata",
      originplace: getAirportLetters(origen),
      destinationplace: getAirportLetters(destination),
      outbounddate: departureDay,
      inbounddate: travelOption === 'return' ? returnDay : ''
    };

    const errorChecking = validateInput(data, today);
    if (!errorChecking.isValid) setErrors(errorChecking.errors);
    if (errorChecking.isValid) {
      setErrors({});
      setSearchData(data);
      console.log(sessionURL);
      createSession(sendingData, setSessionURL);
      history.push('/search-results');
    }
  };

  useEffect(() => {
    const now = new Date(today).toISOString().slice(0,10);
    const addDay = today + 60 * 60 * 24 * 1000;
    const tomorrow = new Date(addDay).toISOString().slice(0,10);
    const initialDepartureDay =
      (searchData.departureDay !== undefined && searchData.departureDay !== '')
      ? searchData.departureDay
      : now;
    const initialReturnDay =
      (searchData.returnDay !== undefined && searchData.returnDay !== '')
      ? searchData.returnDay
      : tomorrow;

    setDepartureDay(initialDepartureDay);
    setReturnDay(initialReturnDay);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getPlaceList(origen, setOrigenPlaceList);
  }, [origen]);

  useEffect(() => {
    getPlaceList(destination, setDestinationPlaceList);
  }, [destination]);

  return (
    <>
      <ContainerDiv>
        <form noValidate onSubmit={ handleSubmit }>

          <div className="first-row">
            <RadioInput
              label="return"
              travelOption={ travelOption }
              setTravelOption={ setTravelOption }
            />
            <RadioInput
              label="one-way"
              travelOption={ travelOption }
              setTravelOption={ setTravelOption }
            />
          </div>

          <div className="second-row">
            <div className="second-row-airports">
              <TextInput
                label="From"
                value={ origen }
                setInputValue={ setOrigen }
                setValue={ setOrigen }
                placeList={ origenPlaceList }
                isFocused={ isOrigenInputFocused }
                setIsFocused={ setIsOrigenInputFocused }
                error={ errors.origen }
              />
              <Icon path={ mdiSwapHorizontalBold }
                horizontal
                onClick={ handleDirectionChange }
                className="direction-change-icon"
              />
              <TextInput
                label="To"
                value={ destination }
                setInputValue={ setDestination }
                setValue={ setDestination }
                placeList={ destinationPlaceList }
                isFocused={ isDestinationInputFocused }
                setIsFocused={ setIsDestinationInputFocused }
                error={ errors.destination }
              />
            </div>

            <div className="second-row-dates">
              <DateInput
                label="Depart"
                value={ departureDay }
                setValue={ setDepartureDay }
                travelOption={ travelOption }
                error={ errors.departureDay }
              />
              <DateInput
                label="Return"
                value={ returnDay }
                setValue={ setReturnDay }
                travelOption={ travelOption }
                error={ errors.returnDay }
              />
              <Button
                text="Search flights"
                handleSearch={ handleSearch }
                icon
              />
            </div>
          </div>
        </form>
      </ContainerDiv>
      {
        isDetailPage && <StyledCityDiv className="city-box">
          <span>{ destination.replace(regex, '') }</span>
        </StyledCityDiv>
      }
    </>
  );
};

SearchFormulary.propTypes = {
  isDetailPage: PropTypes.bool,
};
