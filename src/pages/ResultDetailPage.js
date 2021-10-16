import { SearchFormulary } from '../components/SearchFormulary';
import { DetailResultBox } from '../components/DetailResultBox';
import { ResultContainerDiv } from './ResultDetailPage.styles';

export const ResultDetailPage = () => {
  return (
    <ResultContainerDiv>
      <section>
        <SearchFormulary isDetailPage />
        <DetailResultBox />
      </section>
    </ResultContainerDiv>
  );
};
