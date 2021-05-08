import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Checkout from './components/pages/Checkout'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ProductPage from './components/pages/ProductPage';
import CategoryPage from './components/pages/CategoryPage';
import Cart from './components/pages/Cart';
import Search from './components/Search';

function App() {

  return (
    <div className="App">


      <Router>
        <Navbar cart={[]}/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/product/:id" component={ProductPage}/>
          <Route exact path="/category/:category" component={CategoryPage}/>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/search/:query" component={Search} />
          <Route> <div> <p>This page doesn't exist, you're lost :( , go back to hompage</p> </div> </Route>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
