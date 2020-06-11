import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import SecondHeader from '../header/SecondHeader';
import Footer from '../footer/Footer';
import Loading from '../elements/Loading';
import Breadcrumbs from '../pageOrder/Breadcrumbs';

export default function OrderPage() {
  const { filtr, routes, loading, error } = useSelector((state) => state.serchDirection);
  const [itemStep, setItemStep] = useState(0)
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <React.Fragment>
      <SecondHeader />
      <Breadcrumbs step={itemStep} />
      {loading && <Loading />}
      {!loading &&
        <div>OrderPage</div>
      }
      <Footer />
    </React.Fragment>
  );
}