import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
// import moment from 'moment';

import { fetchSeatsRequest, fetchStorageInitOrder } from '../../../actions/selectRouteSeatsAcions';
import changeFiltrStorage, { getLastFiltr } from '../../../utils/filtr-storage';

import SeatsTrainDescription from './SeatsTrainDescription';
import AmountTickets from './AmountTickets';


export default function MainSeats(props) {
  const { route, seats, loading, error } = useSelector((state) => state.selectRouteSeats);
  const dispatch = useDispatch();
  const { match } = props;
  const id = match.params.id;
  const history = useHistory();

  useEffect(() => {
    console.log('tttt');
    const { order } = getLastFiltr();
// console.log({...order});
    dispatch(fetchStorageInitOrder(order));
    dispatch(fetchSeatsRequest(id));
  }, [])
  
  const handleChooseAnotherTrain = () => {
    changeFiltrStorage({ field: 'order', value: {}});
    // history.push(`order`);
  }

  console.log(route);
  console.log(seats);
  // fetch( `https://netology-trainbooking.herokuapp.com/routes/${id}/seats` )
  //   .then( response => response.json())
  //   .then( data => console.log( data ));
  
  console.log(id);
  return (
    <section className="seats-content main-block">
      <h1 className="seats-title">Выбор мест</h1>
      {route.departure && <div className="seats-select_departure">
        <div className="seats-select_departure_header">
          <span className="seats_departure-vector"></span>
          <Link to='/order' className='change-other-train_button' onClick={handleChooseAnotherTrain}>Выбрать другой поезд</Link>
        </div>
        <SeatsTrainDescription itemTrain={route.departure}/>

        <AmountTickets />
      </div>}
    </section>
  );
}