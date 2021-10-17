import { useEffect, useState } from 'react';
import { getCarrierNames } from '../../assets/getNames';
import { StyledCompaniesDiv } from "./CompaniesBox.styles";

export const CompaniesBox = ({ flightItemOut, flightItemIn, names }) => {
  const [nameList, setNameList] = useState([]);
  const filteredCarriers = [];

  useEffect(() => {
    if (names !== undefined) {
      getCarrierNames(flightItemOut, flightItemIn, names).forEach(element => {
        if (!filteredCarriers.includes(element)) filteredCarriers.push(element);
      });
      setNameList(filteredCarriers);
    }
    //eslint-disable-next-line
  }, [names]);

  return (
    <StyledCompaniesDiv>
      {
        nameList.length > 0 && <span>{ nameList[0] }</span>
      }
      {
        nameList.length > 1 && nameList.slice(1).map((element, id) => <span key={ id }>{ `+ ${element}` }</span>)
      }
    </StyledCompaniesDiv>
  );
};
