import { Button } from '../moduls/Button';
import { StyledPriceBox } from "./PriceBox.styles";

export const PriceBox = ({ price, deals }) => {
  const handleSearch = () => {
    console.log('selected');
  };

  return (
    <StyledPriceBox>
      <span>{ deals }</span>
      <span>€ { price }</span>
      <Button
        text="Select"
        handleSearch={ handleSearch }
        icon
      />
    </StyledPriceBox>
  );
};
