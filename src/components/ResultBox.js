import { Button } from './moduls/Button';
import { ResultBoxContainer } from './ResultBox.styles';
import { ResultCardsContainer } from "./ResultCardsContainer";

export const ResultBox = () => {
  const handleSearch = () => {
    console.log('see more');
  };

  return (
    <ResultBoxContainer>
      <ResultCardsContainer />
      <Button
        text="Load more"
        handleSearch={ handleSearch }
      />
    </ResultBoxContainer>
  );
};
