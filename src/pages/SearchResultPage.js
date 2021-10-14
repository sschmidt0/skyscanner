import { SearchFormulary } from "../components/SearchFormulary";
import { ResultBox } from "../components/ResultBox";
import { SearchContainerDiv } from "./SearchResultPage.styles";

export const SearchResultPage = () => {
  return (
    <SearchContainerDiv>
      <section>
        <SearchFormulary />
        <ResultBox />
      </section>
    </SearchContainerDiv>
  )
};
