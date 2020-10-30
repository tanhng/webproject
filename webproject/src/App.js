import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from '../src/Components/HomePage'
function App() {
  return (
<div className="App">
      <Router>

        <div className="main-content-wrapper d-flex clearfix">
          <Switch>
            <Route path="/" exact={true}>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
