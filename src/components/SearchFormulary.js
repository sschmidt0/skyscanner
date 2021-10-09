import { useState } from 'react';
import { ContainerDiv } from './SearchFormulary.styles';
import { TextInput } from './moduls/TextInput';
import { DateInput } from './moduls/DateInput';
import Icon from '@mdi/react';
import { mdiSwapHorizontalBold } from '@mdi/js';
import { Button } from './moduls/Button';
import { RadioInput } from './moduls/RadioInput';

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

  const handleDirectionChange = () => {
    setOrigen(destination);
    setDestination(origen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = () => {

    console.log('clicked');

    // const data = {
    //   travelOption,
    //   origen,
    //   destination,
    //   departureDay,
    //   returnDay
    // };
    // console.log(data);
  };

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
              setValue={ setOrigen }
            />
            <Icon path={ mdiSwapHorizontalBold }
              horizontal
              onClick={ handleDirectionChange }
              className="direction-change-icon"
            />
            <TextInput
              label="To"
              value={ destination }
              setValue={ setDestination }
            />
          </div>

          <div className="second-row-dates">
            <DateInput
              label="Depart"
              value={ departureDay }
              setValue={ setDepartureDay }
              travelOption={ travelOption }
            />
            <DateInput
              label="Return"
              value={ returnDay }
              setValue={ setReturnDay }
              travelOption={ travelOption }
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
  )
};
