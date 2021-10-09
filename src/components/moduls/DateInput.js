import { StyledDateInput } from './DateInput.styles';

export const DateInput = ({ label, value, setValue, travelOption }) => (
  <StyledDateInput>
    <label htmlFor={ label }>{ label }</label>
    <input
      type="date"
      name={ label }
      value={ value }
      onChange={ (e) => setValue(e.target.value) }
      disabled={ label === 'Depart' ? false : (travelOption === 'return') ? false : true }
    />
  </StyledDateInput>
);
