import { useContext, useState, useEffect } from 'react';
import { filterSegmentsPerLeg } from '../assets/filterSegmentsPerLeg';
import { getConnectionTime } from '../assets/getConnectionTime';
import { SearchContext } from './SearchContext';
import { CompaniesBox } from "./card-elements/CompaniesBox";
import { InfoItem } from './card-elements/InfoItem';
import { TravelDetailLine } from './card-elements/TravelDetailLine';
import { StyledDetailBox, LowerDivContainer } from './DetailResultBox.styles';

export const DetailResultBox = () => {
  const { itemData } = useContext(SearchContext);
  const { segments } = useContext(SearchContext);
  const isDirectOut = itemData.flightItemOut.Stops.length === 0;
  const isDirectIn = itemData.flightItemIn.Stops !== undefined && itemData.flightItemIn.Stops.length === 0;
  const [segmentsInfoOut, setSegmentsInfoOut] = useState('');
  const [segmentsInfoIn, setSegmentsInfoIn] = useState('');
  const [connectionWaitingTime, setConnectionWaitingTime] = useState('');

  useEffect(() => {
    setSegmentsInfoOut(filterSegmentsPerLeg(itemData.flightItemOut, segments));
    Object.entries(itemData.flightItemIn).length !== 0  && setSegmentsInfoIn(filterSegmentsPerLeg(itemData.flightItemIn, segments));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    segmentsInfoOut !== '' && setConnectionWaitingTime(getConnectionTime(segmentsInfoOut));
    segmentsInfoIn !== '' && setConnectionWaitingTime(getConnectionTime(segmentsInfoIn));
    //eslint-disable-next-line
  }, [segmentsInfoOut, segmentsInfoIn]);

  return (
    <>
      {/* -------- OUT -------- */}
      <StyledDetailBox>
        <div className="connection-overview">
          <CompaniesBox
            flightItemOut={ itemData.flightItemOut }
            flightItemIn={ itemData.flightItemIn }
            names={ itemData.names.carriers }
          />
          <InfoItem
            flightData={ itemData.flightItemOut }
            names={ itemData.names.places  }
            isDetailed
          />
        </div>
        <LowerDivContainer>
          {
            isDirectOut && <div className="directFlight">
              <TravelDetailLine
                flightData={ itemData.flightItemOut }
                names={ itemData.names.places }
              />
            </div>
          }
          {
            !isDirectOut && segmentsInfoOut.length > 0 && (
              <div className="notDirectFlight">
                {
                  segmentsInfoOut.map((segmentElement, id) => {
                    return (
                      <div key={ id }>
                        { id !== 0 && <div className="connection-div">
                            <span>{ connectionWaitingTime[id-1] }</span>
                            <span>Connect in airport</span>
                          </div>
                        }
                        <TravelDetailLine
                          flightData={{
                            Departure: segmentElement[0].DepartureDateTime,
                            Arrival: segmentElement[0].ArrivalDateTime,
                            Duration: segmentElement[0].Duration,
                            DestinationStation: segmentElement[0].DestinationStation,
                            OriginStation: segmentElement[0].OriginStation
                          }}
                          names={ itemData.names.places }
                        />
                      </div>
                    )
                  })
                }
              </div>
            )
          }
        </LowerDivContainer>
      </StyledDetailBox>

      {/* -------- IN -------- */}
      {
        Object.entries(itemData.flightItemIn).length !== 0 && <StyledDetailBox>
          <div className="connection-overview">
            <CompaniesBox
              flightItemOut={ itemData.flightItemOut }
              flightItemIn={ itemData.flightItemIn }
              names={ itemData.names.carriers }
            />
            <InfoItem
              flightData={ itemData.flightItemIn }
              names={ itemData.names.places  }
              isDetailed
            />
          </div>
          <LowerDivContainer>
            {
              isDirectIn && <div className="directFlight">
                <TravelDetailLine
                  flightData={ itemData.flightItemIn }
                  names={ itemData.names.places }
                />
              </div>
            }
            {
              !isDirectIn && segmentsInfoIn.length > 0 && (
                <div className="notDirectFlight">
                  {
                    segmentsInfoIn.map((segmentElement, id) => {
                      return (
                        <div key={ id }>
                          { id !== 0 && <div className="connection-div">
                              <span>{ connectionWaitingTime[id-1] }</span>
                              <span>Connect in airport</span>
                            </div>
                          }
                          <TravelDetailLine
                            flightData={{
                              Departure: segmentElement[0].DepartureDateTime,
                              Arrival: segmentElement[0].ArrivalDateTime,
                              Duration: segmentElement[0].Duration,
                              DestinationStation: segmentElement[0].DestinationStation,
                              OriginStation: segmentElement[0].OriginStation
                            }}
                            names={ itemData.names.places }
                          />
                        </div>
                      )
                    })
                  }
              </div>
            )
          }
          </LowerDivContainer>
        </StyledDetailBox>
      }
    </>
  );
};
