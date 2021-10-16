import { useEffect, useState } from 'react';
import { getCarrierNames } from '../../assets/getNames';
import { StyledCompaniesDiv } from "./CompaniesBox.styles";

export const CompaniesBox = ({ flightItemOut, flightItemIn, names }) => {
  const [nameList, setNameList] = useState([]);
  const [copiedList, setCopiedList] = useState([]);

  useEffect(() => {
    if (names !== undefined) {
      setNameList(getCarrierNames(flightItemOut, flightItemIn, names));
      setCopiedList(getCarrierNames(flightItemOut, flightItemIn, names).slice(1));
    }
    //eslint-disable-next-line
  }, [names]);

  return (
    <StyledCompaniesDiv>
      {
        nameList.length > 0 && <span>{ nameList[0] }</span>
      }
      {
        nameList.length > 1 && copiedList.map((element, id) => <span key={ id }>{ `+ ${element}` }</span>)
      }
    </StyledCompaniesDiv>
  );
};
