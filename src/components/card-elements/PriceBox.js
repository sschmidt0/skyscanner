import { Button } from '../moduls/Button';
import { StyledPriceBox } from "./PriceBox.styles";

export const PriceBox = () => {
  const handleSearch = () => {
    console.log('selected');
  };

  return (
    <StyledPriceBox>
      <span>1deal</span>
      <span>€ 150</span>
      <Button
        text="Select"
        handleSearch={ handleSearch }
        icon
      />
    </StyledPriceBox>
  );
};
