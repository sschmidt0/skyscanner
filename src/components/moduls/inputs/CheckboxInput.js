import PropTypes from 'prop-types';
import { StyledCheckboxDiv } from './CheckboxInput.styles';

export const CheckboxInput = ({ label, price, name, changeValue, onChangeMethod }) => (
  <StyledCheckboxDiv>
    <input
      type="checkbox"
      name={ name }
      checked={ changeValue }
      onChange={ () => onChangeMethod(!changeValue) }
    />
    <div>
      <label htmlFor={ name }>{ label }</label>
      <span>€ { price }</span>
    </div>
  </StyledCheckboxDiv>
);

CheckboxInput.propTypes = {
  label: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  changeValue: PropTypes.bool,
  onChangeMethod: PropTypes.func
};
