import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
// import moment from 'moment';

import { fetchSeatsRequest, fetchStorageInitOrder } from '../../../actions/selectRouteSeatsAcions';
import changeFiltrStorage, { getLastFiltr } from '../../../utils/filtr-storage'

import SeatsTrainDescription from './SeatsTrainDescription';



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
        {/* <div className="seats_train-description-wrap">
          <div className="seats_train-description">
            <span className="train-vector-small"></span>
            <div className="seats_train-route-wrap">
            <p className="seats_train-number">{route.departure.train.name}</p>
              <ul className="seats_train-route">
                <li>{route.departure.from.city.name}<span className="arrow-vector"></span></li>
                <li>{route.departure.to.city.name}<span className="arrow-vector"></span></li>
              </ul>
            </div>
          </div>
          <div className="seats_train-shipment-scheme">
            <div className="train-departure-time-wrap">
              <span className="train-departure-time">{moment(route.departure.from.datetime).format('hh:mm')}</span>
              <span className="train-departure-point">{route.departure.from.city.name}</span>
              <span className="train-departure-station">{route.departure.from.railway_station_name}</span>
            </div>
            <span className="seats_travel-time-vector"></span>
            <div className="train-arrival-time">
              <span className="train-departure-time">{moment(route.departure.to.datetime).format('hh:mm')}</span>
              <span className="train-departure-point">{route.departure.to.city.name}</span>
              <span className="train-departure-station">{route.departure.to.railway_station_name}</span>
            </div>
          </div>
          <div className='seats_travel-time'>
            <span className="clockworkOrange-vector"></span>
            <div className='travel-time_wrap'>
              <p className="travel-hours">{moment(route.departure.duration).hour()} часов</p>
              <p className="travel-minutes">{moment(route.departure.duration).minute()} минуты</p>
            </div>
          </div>
        </div> */}

      </div>}
    </section>
  );
}