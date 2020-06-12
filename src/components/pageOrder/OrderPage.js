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
import Filter from './sidebar/Filter';

export default function OrderPage() {
  const { filtr, routes, loading, error } = useSelector((state) => state.serchDirection);
  const [itemStep, setItemStep] = useState(0)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // console.log(routes);
    // console.log(filtr);
    if (getLastFiltr()) {
      dispatch(fetchDirectionChangeFiltr(getLastFiltr()));
    }
    dispatch(fetchDirectionRoutesRequest());
  }, [])

console.log(routes);
// console.log(filtr);

  return (
    <React.Fragment>
      <SecondHeader />
      <Breadcrumbs step={itemStep} />
      <main className="main-container">
        <div className="container">
          <section className="sidebar-content">
          <Switch>
            <Route exact path='/order' component={Filter} />
          </Switch>
          </section>
          {/* <Switch>
            <Route exact path='/order' component={Filter} />
          </Switch> */}
        </div>
      </main>

      {loading && <Loading />}
      {!loading &&
        <div>OrderPage</div>
      }
      <Footer />
    </React.Fragment>
  );
}