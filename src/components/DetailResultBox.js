import { useContext } from 'react';
import { ResultContext } from './ResultContext';
import { CompaniesBox } from "./card-elements/CompaniesBox";
import { TravelDetailLine } from "./card-elements/TravelDetailLine";
import { TravelInfoBox } from "./card-elements/TravelInfoBox";
import { StyledDetailBox } from './DetailResultBox.styles';

export const DetailResultBox = () => {
  const isDirect = false;
  const [itemDetails, setItemDetails] = useContext(ResultContext);

  //console.log('itemDetails', itemDetails);

  return (
    <StyledDetailBox>
      {/* <div className="connection-overview">
        <CompaniesBox />
        <TravelInfoBox />
      </div> */}
      {
        isDirect && <div className="directFlight">
          {/* <TravelDetailLine
            duration="1h 50"
            arrival="12:25"
            departure="11:05"
            origen="Barcelona (BCN)"
            destination="London Stansted (STN)"
          /> */}
        </div>
      }
      {
        !isDirect && <div className="stopFlight">
          {/* <TravelDetailLine
            duration="1h 50"
            arrival="12:25"
            departure="11:05"
            origen="London Heathrow (LHR)"
            destination="Hamad International (DOH)"
          /> */}
          <div className="connection-div">
            <span>1h 40</span>
            <span>Connect in airport</span>
          </div>
          {/* <TravelDetailLine
            duration="1h 50"
            arrival="12:25"
            departure="11:05"
            origen="Hamad International (DOH)"
            destination="Sydney (SYD)"
          /> */}
        </div>
      }
    </StyledDetailBox>
  );
};
