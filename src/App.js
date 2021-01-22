import {
  Switch,
  Route,
} from 'react-router-dom';
import StarterPage from './Pages/starterPage/StarterPage';
import ModePage from './Pages/modePage/ModePage';
import PlayPage from './Pages/playPage/PlayPage';
// import LevelsPage from './Pages/levelsPage/LevelsPage';
import './App.css';


function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" component={StarterPage} />
          <Route exact path="/:mode" component={ModePage} />
          {/* <Route exact path="/modes/level" component={LevelsPage} /> */}
          <Route exact path="/:mode/:level" component={PlayPage} />
      </Switch>
    </div>
  );
}

export default App;
