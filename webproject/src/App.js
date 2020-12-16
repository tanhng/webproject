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
import Footer from '../src/Components/Footer';
import Products from '../src/Components/Products';
import temp from '../src/Components/temp';
import temp2 from '../src/Components/temp2';
import temp3 from '../src/Components/temp3';
import ViewItem from '../src/Components/ViewItem';
import ViewOrders from '../src/Components/ViewOrders';
import ConfirmOrder from './Components/ConfirmOrder';
import FinishPurchase from './Components/FinishPurchase';
import Purchase from './Components/Purchase';
import EditCar from './Components/EditCar';
import SearchByType from './Components/SearchByType';
import SearchByName from './Components/SearchByName';
import FinishEdit from './Components/FinishEdit';
import SearchByOdometer from './Components/SearchByOdometer';
function App() {
  return (

  <Router>
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
     {/* <Header></Header>
    <div className="outer">
      <div className="inner"> */}



      
      <Header></Header>
        <Switch>
          <Route exact path='/' component={Products} />
          {/* oke */}
          <Route path='/register' component={RegisterPage} />
          {/* oke */}
          <Route path='/login' component={LoginPage} />
          {/* oke */}
          <Route  exact path='/products' component={Products} />
          {/* oke */}
          <Route path='/addItem' component={temp} />
          {/* <Route path='/addItem2' component={temp2} /> */}
          {/* oke */}
          <Route path='/addItem3/:id' component={temp3} />
          <Route path='/searchByType/:type' component={SearchByType}/>
          <Route path='/viewOrders' component={ViewOrders} />
          <Route path='/purchase' component={Purchase} />
          <Route exact path='/product/:id' component={ViewItem} />
          <Route exact path='/receipt/:id' component={FinishPurchase} />
          <Route exact path='/confirmOrder' component={ConfirmOrder} />
          <Route exact path='/editcar' component={EditCar} />
          <Route exact path='/finishedit/:id' component={FinishEdit} />
          <Route exact path='/searchByOdometer/:odometer' component={SearchByOdometer} />
          <Route exact path='/searchByName/:name' component={SearchByName} />
        </Switch>
        <Footer></Footer>
      {/* </div>
    </div> */}
  </Router>
  ); 
}

export default App;
