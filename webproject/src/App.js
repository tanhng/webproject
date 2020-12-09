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
import Products from '../src/Components/Products';
import temp from '../src/Components/temp';
import temp2 from '../src/Components/temp2';
import temp3 from '../src/Components/temp3';
import ViewItem from '../src/Components/ViewItem';
import ConfirmOrder from './Components/ConfirmOrder';
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
          <Route  exact path='/products' component={Products} />
          <Route path='/addItem' component={temp} />
          <Route path='/addItem2' component={temp2} />
          <Route path='/addItem3' component={temp3} />
          <Route exact path='/product/:id' component={ViewItem} />
          <Route exact path='/confirmOrder' component={ConfirmOrder} />
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
