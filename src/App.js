import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Checkout from './components/pages/Checkout'

import {HashRouter , Switch, Route} from 'react-router-dom';

import ProductPage from './components/pages/ProductPage';
import CategoryPage from './components/pages/CategoryPage';
import Cart from './components/pages/Cart';
import Search from './components/Search';

import ScrollToTop from './components/functionality/ScrollToTop'
import Account from './components/pages/Account';
import AuthChangeDetect from './components/functionality/AuthChangeDetect';
import Orders from './components/pages/Orders';

function App() {

  return (
    <div className="App">


      <HashRouter>
        <Navbar cart={[]}/>
          <ScrollToTop/>
          <AuthChangeDetect />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/product/:id" component={ProductPage}/>
          <Route exact path="/category/:category" component={CategoryPage}/>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/search/:query" component={Search} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/orders" component={Orders} />
          <Route> <div> <p>This page doesn't exist, you're lost :( , go back to hompage</p> </div> </Route>
        </Switch>
        <Footer />
      </HashRouter>
      
    </div>
  );
}

export default App;
