import { useState } from 'react';
import { CompaniesBox } from './card-elements/CompaniesBox';
import { PriceBox } from './card-elements/PriceBox';
import { TravelInfoBox } from './card-elements/TravelInfoBox';
import { StyledCard } from './ResultItemCard.styles';

export const ResultItemCard = ({ itinerary, flightInfo, names }) => {
  const deals = itinerary.PricingOptions.length > 1 ? `${itinerary.PricingOptions.length}deals` : '1deal';
  const [flightItem, setFlightItem] = useState('');

  console.log('ResultItemCard flightInfo', flightInfo);

  return (
    <>
    {
      flightInfo.outboundFilteredIdLegs.map((flightItemOut, id) => flightInfo.inboundFilteredIdLegs.map(flightItemIn => (

    <StyledCard>
      <CompaniesBox
        flightItemOut={ flightItemOut }
        flightItemIn={ flightItemIn }
        names={ names.carriers }
      />
      <TravelInfoBox
        // flightInfo={ flightInfo }
        flightItemOut={ flightItemOut }
        flightItemIn={ flightItemIn }
        names={ names.places }
        // setFlightItem={ setFlightItem }
      />
      <PriceBox
        price={ itinerary.PricingOptions[0].Price }
        deals={ deals }
      />
    </StyledCard>
      )))
    }
    </>
  )
};
