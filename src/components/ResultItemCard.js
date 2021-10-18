import PropTypes from 'prop-types';
import { CompaniesBox } from './card-elements/CompaniesBox';
import { InfoItem } from './card-elements/InfoItem';
import { PriceBox } from './card-elements/PriceBox';
import { StyledCard } from './ResultItemCard.styles';

export const ResultItemCard = ({ itinerary, flightInfo, names }) => {
  const deals = itinerary.PricingOptions.length > 1 ? `${itinerary.PricingOptions.length}deals` : '1deal';
  const flightData = {
    flightItemOut: flightInfo.outboundFilteredIdLegs,
    flightItemIn: flightInfo.inboundFilteredIdLegs !== undefined ? flightInfo.inboundFilteredIdLegs : {},
    names: names
  };

  return (
    <StyledCard>
      <CompaniesBox
        flightItemOut={ flightInfo.outboundFilteredIdLegs }
        flightItemIn={ flightInfo.inboundFilteredIdLegs !== undefined ? flightInfo.inboundFilteredIdLegs : {} }
        names={ names.carriers }
      />
      <div className="middle-info-box">
        <InfoItem
          flightData={ flightInfo.outboundFilteredIdLegs }
          names={ names.places  }
        />
        {
          flightInfo.inboundFilteredIdLegs !== undefined && <InfoItem
            flightData={ flightInfo.inboundFilteredIdLegs }
            names={ names.places  }
          />
        }
      </div>
      <PriceBox
        price={ itinerary.PricingOptions[0].Price }
        deals={ deals }
        flightData={ flightData }
      />
    </StyledCard>
  )
};

ResultItemCard.propTypes = {
  itinerary: PropTypes.object,
  flightInfo: PropTypes.object,
  names: PropTypes.object
};
