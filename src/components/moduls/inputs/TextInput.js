import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PlaceListBox } from '../../PlaceListBox';
import { StyledTextInput } from './TextInput.styles';
import Icon from '@mdi/react';
import { mdiAirplane } from '@mdi/js';

export const TextInput = ({ label, value, setInputValue, placeList, isFocused, setIsFocused, setValue, error }) => {
  const inputRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isFocused && inputRef.current && !inputRef.current.contains(e.target)) setIsFocused(false);
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    }
    //eslint-disable-next-line
  }, [isFocused]);

  return (
    <StyledTextInput ref={ inputRef }>
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
};

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
