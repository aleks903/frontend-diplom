import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/pageMain/MainPage';
import OrderPage from './components/pageOrder/OrderPage';

import regeneratorRuntime from 'regenerator-runtime';

import './css/SeatSelect.css';
import './css/MainPage.css';
import './css/style.css';
// import './App.css';
require.context('./img');

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/order' component={OrderPage} />
          {/* <Route exact path='/order/:id' component={OrderPage} /> */}
        </Switch>
      </Router>

      {/* <AboutUs /> */}
      {/* <MainPage /> */}
      {/* <Router>
        <Header />
        <main className="container">
          <div className="row">
            <div className="col">
              <Banner />
              <Switch>
                <Route exact path={`/catalog/:id`} component={PageProduct} />
                <Route exact path={`/catalog`} component={PageCatalog} />
                <Route exact path={`/about`} component={PageAbout} />
                <Route exact path={`/contacts`} component={PageContacts} />
                <Route exact path={`/cart`} component={PageCart} />
                <Route exact path={`/`} component={PageHome} />
                <Route path='*' component={Page404} />
              </Switch>
            </div>
          </div>
        </main>
        <Footer />
      </Router> */}
    </React.Fragment>
  );
}
