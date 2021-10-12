import { ResultItemCard } from "./ResultItemCard";
import { StyledList } from './ResultCardsContainer.styles';

export const ResultCardsContainer = (params) => {
  return (
    <StyledList>
      <li><ResultItemCard /></li>
      <li><ResultItemCard /></li>
    </StyledList>
  )
};
