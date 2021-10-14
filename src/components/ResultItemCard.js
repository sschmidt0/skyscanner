import { CompaniesBox } from './card-elements/CompaniesBox';
import { PriceBox } from './card-elements/PriceBox';
import { TravelInfoBox } from './card-elements/TravelInfoBox';
import { StyledCard } from './ResultItemCard.styles';

export const ResultItemCard = (params) => {
  return (
    <StyledCard>
      <CompaniesBox />
      <TravelInfoBox />
      <PriceBox />
    </StyledCard>
  )
};
