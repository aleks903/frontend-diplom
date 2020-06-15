import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDirectionRoutesRequest, fetchDirectionChangeFiltr } from '../../actions/directionSearchAction';

import SecondHeader from '../header/SecondHeader';
import Footer from '../footer/Footer';
import Loading from '../elements/Loading';
import Breadcrumbs from '../pageOrder/Breadcrumbs';

import { getLastFiltr } from '../../utils/filtr-storage';

//aside
import SidebarFilter from './sidebar/SidebarFilter';
import MainRoutes from './main/MainRoutes';
import MainSeats from './main/MainSeats';

export default function OrderPage() {
  const { filtr, routes, loading, error } = useSelector((state) => state.serchDirection);
  const [itemStep, setItemStep] = useState(0)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // console.log('iz local');
    // console.log(routes);
    // console.log(filtr);
    if (getLastFiltr().filter) {
      dispatch(fetchDirectionChangeFiltr(getLastFiltr().filter));
    }
    // dispatch(fetchDirectionRoutesRequest());
  }, [])

// console.log(routes);
// console.log(filtr);

  return (
    <React.Fragment>
      <SecondHeader />
      <Breadcrumbs step={itemStep} />
      <main className="main-container">
        <div className="container">
          <section className="sidebar-content">
          <Switch>
            <Route exact path={`/order/:id`} component={SidebarFilter} />
            <Route exact path={`/order`} component={SidebarFilter} />
          </Switch>
          </section>
          <Switch>
            <Route exact path={`/order/:id`} component={MainSeats} />
            <Route exact path={`/order`} component={MainRoutes} />
          </Switch>
        </div>
      </main>

      {loading && <Loading />}
      <Footer />
    </React.Fragment>
  );
}