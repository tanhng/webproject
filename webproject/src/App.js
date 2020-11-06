import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import HomePage from '../src/Components/HomePage'
import RegisterPage from '../src/Components/RegisterPage';
import LoginPage from '../src/Components/LoginPage';
import Header from '../src/Components/Header';

function App() {
  return (<Router>
    {/* // <div className="App">
    //   <Router>

    //     <div className="main-content-wrapper d-flex clearfix">
    //       <Switch>
    //         <Route path="/" exact={true}><HomePage /></Route>
    //         <Route path='/register' component={RegisterPage} />
    //         <Route path='/login' component={LoginPage} />
    //       </Switch>
    //     </div>
    //   </Router>
    // </div> */}
    <Header></Header>
    <div className="outer">
      <div className="inner">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
