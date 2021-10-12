import { createContext, useState } from 'react';

export const SearchContext = createContext();
SearchContext.displayName = 'SearchContext';

export const SearchProvider = (props) => {
  const [searchData, setSearchData] = useState({
    sessionURL: '',
    origen: '',
    destination: '',
    departureDate: '',
    returnDate: ''
  });

  return (
    <SearchContext.Provider value={{
      searchData,
      setSearchData
    }}>
      { props.children }
    </SearchContext.Provider>
  )
};
