import PropTypes from 'prop-types';
import { StyledPlaceList } from './PlaceListBox.styles';
import Icon from '@mdi/react';
import { mdiAirplane } from '@mdi/js';

export const PlaceListBox = ({ list, setValue, setIsFocused }) => {
  const handleClick = (e1, e2) => {
    const selectedPlace = `${e2} (${e1})`;
    setValue(selectedPlace);
    setIsFocused(false);
  };

  return (
    <StyledPlaceList>
      {
        (list !== undefined && list.length > 0) && list.map(element => {
          return (
            <li
              key={ element.PlaceId }
              onClick={ () => handleClick(element.PlaceId.slice(0, element.PlaceId.length-4), element.PlaceName) }
            >
              <Icon path={ mdiAirplane }
                horizontal
                vertical
                rotate={ 180 }
              />
              <div>
                <span>
                  { element.PlaceName } ({ element.PlaceId.slice(0, element.PlaceId.length-4) })
                </span>
                <span>{ element.CountryName }</span>
              </div>
            </li>
          )
        })
      }
    </StyledPlaceList>
  );
};

PlaceListBox.propTypes = {
  list: PropTypes.array,
  setValue: PropTypes.func,
  setIsFocused: PropTypes.func
};
