import { SearchFormulary } from "../components/SearchFormulary";
import { ContainerDiv  } from "./LandingPage.styles";

export const LandingPage = () => {

  return (
    <ContainerDiv>
      <section>
        <h1>Let the journey begin</h1>
        <SearchFormulary />
      </section>
    </ContainerDiv>
  )

};
