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
