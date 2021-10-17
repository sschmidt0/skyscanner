import { Switch, Route } from 'react-router-dom';
import { SearchProvider } from './components/SearchContext';
import { LandingPage } from './pages/LandingPage';
import { SearchResultPage } from './pages/SearchResultPage';
import { ResultDetailPage } from './pages/ResultDetailPage';

export const App = () => {
  return (
    <SearchProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route exact path="/search-results" component={ SearchResultPage } />
          <Route exact path="/result/item" component={ ResultDetailPage } />
        </Switch>
      </div>
    </SearchProvider>
  );
}

export default App;
