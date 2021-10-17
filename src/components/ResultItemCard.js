import { mdiCarLightDimmed } from '@mdi/js';
import { CompaniesBox } from './card-elements/CompaniesBox';
import { PriceBox } from './card-elements/PriceBox';
import { TravelInfoBox } from './card-elements/TravelInfoBox';
import { StyledCard } from './ResultItemCard.styles';

export const ResultItemCard = ({ itinerary, flightInfo, names }) => {
  const deals = itinerary.PricingOptions.length > 1 ? `${itinerary.PricingOptions.length}deals` : '1deal';

  console.log('flightInfo', flightInfo);

  return (
    <>

        {/* flightInfo.outboundFilteredIdLegs.map((flightItemOut) => flightInfo.inboundFilteredIdLegs.map((flightItemIn, id) => { */}

          {/* return ( */}
            <StyledCard>
              <CompaniesBox
                flightItemOut={ flightInfo.outboundFilteredIdLegs }
                flightItemIn={ flightInfo.inboundFilteredIdLegs }
                names={ names.carriers }
              />
              <TravelInfoBox
                flightItemOut={ flightInfo.outboundFilteredIdLegs }
                flightItemIn={ flightInfo.inboundFilteredIdLegs }
                names={ names.places }
              />
              <PriceBox
                price={ itinerary.PricingOptions[0].Price }
                deals={ deals }
                // itemData={ itemData }
              />
            </StyledCard>
        {/* ))) */}
      {/* } */}
    </>
  )
};



{/* const itemData = {
            flightItemOut: flightItemOut,
            flightItemIn: flightItemIn,
            names: names
          }; */}
