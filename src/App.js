import { Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { SearchResultPage } from './pages/SearchResultPage';

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route exact path="/search-results" component={ SearchResultPage } />
      </Switch>
    </div>
  );
}

export default App;
