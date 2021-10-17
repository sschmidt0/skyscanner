import { useContext } from 'react';
import { ResultContext } from '../ResultContext';
import { useHistory } from 'react-router-dom';
import { Button } from '../moduls/Button';
import { StyledPriceBox } from "./PriceBox.styles";

export const PriceBox = ({ price, deals, itemData }) => {
  const history = useHistory();
  //const [itemDetails, setItemDetails] = useContext(ResultContext);
  const regex = /,\d+/;
  const strPrice = price.toString();
  const replacePrice = strPrice.replace('.', ',');
  const formattedPrice = (replacePrice.match(regex) !== null && replacePrice.match(regex)[0].length === 3)
    ? replacePrice
    : `${replacePrice}0`;

  console.log('from PriceBox itemData', itemData);
  //console.log('from PriceBox itemDetails', itemDetails);

  const handleSearch = () => {
    console.log('selected');
    //setItemDetails(itemData);
    history.push('/result/item');
  };

  return (
    <StyledPriceBox>
      <span>{ deals }</span>
      <span>€ { formattedPrice }</span>
      <Button
        text="Select"
        handleSearch={ handleSearch }
        icon
      />
    </StyledPriceBox>
  );
};
