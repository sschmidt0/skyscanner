import { useContext, useState, useEffect } from 'react';
import { SearchContext } from './SearchContext';
import { pollSession } from '../assets/pollSession';
import { ResultItemCard } from "./ResultItemCard";
import { StyledList } from './ResultCardsContainer.styles';

export const ResultCardsContainer = () => {
  const [sessionURL] = useContext(SearchContext);
  const [data, setData] = useState({});

  useEffect(() => {
    pollSession(sessionURL, setData);
  }, [sessionURL]);

  return (
    <StyledList>
      <li><ResultItemCard /></li>
      <li><ResultItemCard /></li>
    </StyledList>
  )
};
