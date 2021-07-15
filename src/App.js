import { Router } from '@reach/router';
import './App.css';
import HomeComponent from './components/HomeComponent';
import NumberComponent from './components/NumberComponent';
import ComboComponent from './components/ComboComponent';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <HomeComponent path="/home"/>
          <NumberComponent path="/:id"/>
          <ComboComponent path="/:word/:textColor/:backgroundColor"/>

        </Router>

      </div>
    </div>
  );
}

export default App;
