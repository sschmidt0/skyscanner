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

  return (
    <SearchContext.Provider value={[
      searchData,
      setSearchData,
      sessionURL,
      setSessionURL
    ]}>
      { props.children }
    </SearchContext.Provider>
  )
};
