import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { fetchDirectionChangeFiltr } from '../../../actions/directionSearchAction';

import RoutesHead from './RoutesHead';
import RoutesFooter from './RoutesFooter';
import Loading from '../../elements/Loading';

export default function MainRoutes() {
  const { filtr, routes, loading, error } = useSelector((state) => state.serchDirection);

  console.log(routes);

  return (
    <section className="trains main-block">
      <RoutesHead />
      {loading && <Loading />}
      {!loading &&
        <section class="trains-list-container">
          <ul class="trains-list">
            
          </ul>
        </section>
        <RoutesFooter />
      }

    </section>
  );
}