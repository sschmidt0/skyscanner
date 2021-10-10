import PropTypes from 'prop-types';
import { PlaceListBox } from './PlaceListBox';
import { StyledTextInput } from './TextInput.styles';
import Icon from '@mdi/react';
import { mdiAirplane } from '@mdi/js';

export const TextInput = ({ label, value, setInputValue, placeList, isFocused, setIsFocused, setValue, error }) => (
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
        onChange={ (e) => setInputValue(e.target.value) }
        onFocus={ () => setIsFocused(true) }
        // onBlur={ () => setIsFocused(false) }
      />
    </div>
    { error !== '' && <span className="error-span">{ error }</span> }
    {
      placeList !== 'undefined' && isFocused &&
      <PlaceListBox
        list={ placeList }
        setValue={ setValue }
        setIsFocused={ setIsFocused }
      />
    }
  </StyledTextInput>
);

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  setInputValue: PropTypes.func,
  placeList: PropTypes.array,
  isFocused: PropTypes.bool,
  setIsFocused: PropTypes.func,
  setValue: PropTypes.func,
  error: PropTypes.string
};
