import { useContext } from 'react';
import PropTypes from 'prop-types';
import { SearchContext } from '../SearchContext';
import { useHistory } from 'react-router-dom';
import { Button } from '../moduls/Button';
import { StyledPriceBox } from "./PriceBox.styles";

export const PriceBox = ({ price, deals, flightData }) => {
  const history = useHistory();
  const { setItemData } = useContext(SearchContext);
  const regex = /,\d+/;
  const strPrice = price.toString();
  const replacePrice = strPrice.replace('.', ',');
  const formattedPrice = (replacePrice.match(regex) !== null && replacePrice.match(regex)[0].length === 3)
    ? replacePrice
    : `${replacePrice}0`;

  const handleSearch = () => {
    setItemData(flightData);
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

PriceBox.propTypes = {
  price: PropTypes.number,
  deals: PropTypes.string,
  flightData: PropTypes.object
};
