import PropTypes from 'prop-types';
import { StyledDateInput } from './DateInput.styles';

export const DateInput = ({ label, value, setValue, travelOption, error }) => (
  <StyledDateInput>
    <label htmlFor={ label }>{ label }</label>
    <div>
      <input
        type="date"
        name={ label }
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
        disabled={ label === 'Depart' ? false : (travelOption === 'return') ? false : true }
      />
      { error !== '' && <span className="error-span">{ error }</span> }
    </div>
  </StyledDateInput>
);

DateInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  travelOption: PropTypes.string,
  error: PropTypes.string
};
