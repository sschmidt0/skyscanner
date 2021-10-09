import { StyledTextInput } from './TextInput.styles';
import Icon from '@mdi/react';
import { mdiAirplane } from '@mdi/js';

export const TextInput = ({ label, value, setValue }) => (
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
        name={ value }
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />
    </div>
  </StyledTextInput>
);
