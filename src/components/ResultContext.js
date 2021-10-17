import { createContext, useState } from 'react';

export const ResultContext = createContext();
ResultContext.displayName = 'ResultContext';

export const ResultProvider = (props) => {
  const [itemDetails, setItemDetails] = useState({
    flightItemOut: '',
    flightItemIn: '',
    names: '',
  });

  console.log('resultcontext', itemDetails);

  return (
    <ResultContext.Provider value={[
      itemDetails,
      setItemDetails
    ]}>
      { props.children }
    </ResultContext.Provider>
  )
};
