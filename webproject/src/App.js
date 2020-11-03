import logo from './car-it.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from '../src/Components/HomePage'
import RegisterPage from '../src/Components/RegisterPage';
import LoginPage from '../src/Components/LoginPage';

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
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
          <img src={logo} alt="Logo" style={{ width: '200px' }} />
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link text-white text-uppercase" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-uppercase" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white text-uppercase" to={"/register"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
