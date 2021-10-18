import { createContext, useState } from 'react';

export const SearchContext = createContext();
SearchContext.displayName = 'SearchContext';

export const SearchProvider = (props) => {
  const [searchData, setSearchData] = useState({
    origen: '',
    destination: '',
    departureDate: '',
    returnDate: ''
  });
  const [sessionURL, setSessionURL] = useState('');
  const [itemData, setItemData] = useState({
    flightItemOut: '',
    flightItemIn: '',
    names: ''
  });
  const [segments, setSegments] = useState([]);

  return (
    <SearchContext.Provider value={{
      searchData,
      setSearchData,
      sessionURL,
      setSessionURL,
      itemData,
      setItemData,
      segments,
      setSegments
    }}>
      { props.children }
    </SearchContext.Provider>
  )
};
