import { StyledTextInput } from './TextInput.styles';
import Icon from '@mdi/react';
import { mdiAirplane } from '@mdi/js';
import { PlaceListBox } from './PlaceListBox';

export const TextInput = ({ label, value, setValue, placeList, isFocused, setIsFocused }) => (
  <StyledTextInput>
    <label htmlFor={ label }>{ label }</label>
    <div>
      <Icon path={ mdiAirplane }
        horizontal
        vertical
        rotate={ 180 }
      />
      <input
        type="text"
        name={ label }
        value={ value }
        onChange={ (e) => setValue(e) }
        onFocus={ () => setIsFocused(true) }
        onBlur={ () => setIsFocused(false) }
      />
    </div>
    { placeList !== 'undefined' && isFocused && <PlaceListBox list={ placeList } setValue={ setValue } /> }
  </StyledTextInput>
);
