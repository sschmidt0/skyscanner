import PropTypes from 'prop-types';
import { StyledFilterLineDiv } from './FilterLine.styles';
import { CheckboxInput } from './moduls/inputs/CheckboxInput';

export const FilterLine = ({
  isDirectSelected,
  setIsDirectSelected,
  isOneStopSelected,
  setIsOneStopSelected,
  isMultipleStopSelected,
  setIsMultipleStopSelected,
}) => (
    <StyledFilterLineDiv>
      <span>Stops</span>
      <CheckboxInput
        label="Direct"
        price="€ 109"
        name="direct"
        changeValue={ isDirectSelected }
        onChangeMethod={ setIsDirectSelected }
      />
      <CheckboxInput
        label="1 stop"
        price="€ 146"
        name="one-stop"
        changeValue={ isOneStopSelected }
        onChangeMethod={ setIsOneStopSelected }
      />
      <CheckboxInput
        label="2+ stops"
        price="€632"
        name="more-stops"
        changeValue={ isMultipleStopSelected }
        onChangeMethod={ setIsMultipleStopSelected }
      />
    </StyledFilterLineDiv>
  );

FilterLine.propTypes = {
  isDirectSelected: PropTypes.bool,
  setIsDirectSelected: PropTypes.func,
  isOneStopSelected: PropTypes.bool,
  setIsOneStopSelected: PropTypes.func,
  isMultipleStopSelected: PropTypes.bool,
  setIsMultipleStopSelected: PropTypes.func,
};
