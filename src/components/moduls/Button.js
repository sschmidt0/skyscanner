import { StyledButton } from './Button.styles';
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

export const Button = ({ text, handleSearch, icon }) => (
  <StyledButton
    type="button"
    onClick={ () => handleSearch() }
  >
    { text }
    { icon && <Icon path={ mdiArrowRight }
        horizontal
        vertical
        rotate={ 180 }
      />
    }
  </StyledButton>
);
