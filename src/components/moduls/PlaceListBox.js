import { StyledPlaceList } from './PlaceListBox.styles';
import Icon from '@mdi/react';
import { mdiAirplane } from '@mdi/js';

export const PlaceListBox = ({ list, setValue }) => (
  <StyledPlaceList>
    {
      (list !== undefined && list.length > 0) && list.map(element => {
        return (
          <li
            key={ element.PlaceId }
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
