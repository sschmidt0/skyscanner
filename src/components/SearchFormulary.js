import { useState, useEffect } from 'react';
import { validateInput } from '../assets/validateInput';

import { ContainerDiv } from './SearchFormulary.styles';
import { TextInput } from './moduls/TextInput';
import { DateInput } from './moduls/DateInput';
import Icon from '@mdi/react';
import { mdiSwapHorizontalBold } from '@mdi/js';
import { Button } from './moduls/Button';
import { RadioInput } from './moduls/RadioInput';
import { getPlaceList } from '../assets/getPlaceList';
import { sendFormData } from '../assets/sendFormData';

export const SearchFormulary = () => {
  const today = Date.now();
  const now = new Date(today).toISOString().slice(0,10);
  const addDay = today + 60 * 60 * 24 * 1000;
  const tomorrow = new Date(addDay).toISOString().slice(0,10);

  const [travelOption, setTravelOption] = useState('return');
  const [origen, setOrigen] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDay, setDepartureDay] = useState(now);
  const [returnDay, setReturnDay] = useState(tomorrow);
  const [origenPlaceList, setOrigenPlaceList] = useState([]);
  const [destinationPlaceList, setDestinationPlaceList] = useState([]);
  const [isOrigenInputFocused, setIsOrigenInputFocused] = useState(true);
  const [isDestinationInputFocused, setIsDestinationInputFocused] = useState(false);
  const [errors, setErrors] = useState({});

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
      country: "Spain",
      currency: "EUR",
      locale: "es-ES",
      locationSchema: "iata",
      originplace: origen,
      destinationplace: destination,
      outbounddate: departureDay,
      inbounddate: travelOption === 'return' ? returnDay : ''
    };

    const errorChecking = validateInput(data, today);
    if (!errorChecking.isValid) setErrors(errorChecking.errors);
    if (errorChecking.isValid) {
      setErrors({});
      sendFormData(sendingData);
    }
  };

  useEffect(() => {
    getPlaceList(origen, setOrigenPlaceList);
  }, [origen]);

  useEffect(() => {
    getPlaceList(destination, setDestinationPlaceList);
  }, [destination]);

  return (
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
  );
};
