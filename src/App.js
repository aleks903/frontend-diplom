import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import Banner from './components/Banner';
// import Footer from './components/Footer';
// import PageHome from './components/PageHome';
// import PageCatalog from './components/PageCatalog';
// import PageAbout from './components/PageAbout';
// import PageContacts from './components/PageContacts';
// import Page404 from './components/Page404';
// import PageProduct from './components/PageProduct';
// import PageCart from './components/PageCart';
import MainPage from './components/PageMain/MainPage';

// eslint-disable-next-line
// import regeneratorRuntime from 'regenerator-runtime';
import './css/MainPage.css';
import './css/style.css';
import './App.css';
require.context('./img');

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <MainPage />
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
