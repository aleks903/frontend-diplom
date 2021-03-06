import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import moment from 'moment';

import { fetchDirectionChangeFiltr } from '../../../actions/directionSearchAction';
import { fetchSelectRoute } from '../../../actions/selectRouteSeatsAcions';
import changeFiltrStorage from '../../../utils/filtr-storage'

import RoutesHead from './RoutesHead';
import RoutesFooter from './RoutesFooter';
import Loading from '../../elements/Loading';

export default function MainRoutes() {
  const { filtr, routes, loading, error } = useSelector((state) => state.serchDirection);
  const dispatch = useDispatch();
  const { items } = routes;
  const history = useHistory();

  const classes = [
    {traiClass: 'first', nameClass: 'Люкс'},
    {traiClass: 'second', nameClass: 'Купе'},
    {traiClass: 'third', nameClass: 'Плацкарт'},
    {traiClass: 'fourth', nameClass: 'Сидячий'},
  ];

  const handleSeats = (itemTrain) => {
    console.log(itemTrain);
    changeFiltrStorage({ field: 'order', value: { route: itemTrain }});
    dispatch(fetchSelectRoute(itemTrain));
    history.push(`order/${itemTrain.departure._id}`);
    // history.push(`order/cr`);
  }

  return (
    <section className="trains main-block">
      <RoutesHead />
      {loading && <Loading />}
      {!loading &&
        <React.Fragment>
          <section className="trains-list-container">
            <ul className="trains-list">
              {items && items.map((item, index) => (
                <li className="train" key={index}>
                  <div className="train-description-wrap">
                    <div className="train-description">
                      <span className="train-vector"></span>
                      <p className="train-number">{item.departure.train.name}</p>
                      <ul className="train-route">
                        <li>
                        {item.departure.from.city.name}
                        <span className="arrow-vector"></span></li>
                        <li>{item.departure.to.city.name}
                        {/* <span className="arrow-vector"></span> */}
                        </li>
                        {/* <li>Санкт-Петербург «Волга»</li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="train-travel_time-scheme-wrap">
                    <div className="train-shipment-scheme">
                      <div className="train-departure-time-wrap">
                        <span className="train-departure-time">
                          {moment(item.departure.from.datetime).format('hh:mm')}
                        </span>
                        <span className="train-departure-point">{item.departure.from.city.name}</span>
                        <span className="train-departure-station">{item.departure.from.railway_station_name}</span>
                      </div>
      
                      <div className="travel-time-wrap">
                        <span className="travel-time">{moment(item.departure.duration).format('hh:mm')}</span>
                        <span className="travel-time-vector"></span>
                      </div>
      
                      <div className="train-arrival-time">
                        <span className="train-departure-time">{moment(item.departure.to.datetime).format('hh:mm')}</span>
                        <span className="train-departure-point">{item.departure.to.city.name}</span>
                        <span className="train-departure-station">{item.departure.to.railway_station_name}</span>
                      </div>
                    </div>
      
                    {item.arrival && <div className="train-shipment-reverse-scheme">
                      <div className="train-departure-time-wrap">
                        <span className="train-departure-time">{moment(item.arrival.from.datetime).format('hh:mm')}</span>
                        <span className="train-departure-point">{item.arrival.from.city.name}</span>
                        <span className="train-departure-station">{item.arrival.from.railway_station_name}</span>
                      </div>
      
                      <div className="travel-time-wrap">
                        <span className="travel-time">{moment(item.arrival.duration).format('hh:mm')}</span>
                        <span className="travel-time-vector-reverse"></span>
                      </div>
      
                      <div className="train-arrival-time">
                        <span className="train-departure-time">{moment(item.arrival.to.datetime).format('hh:mm')}</span>
                        <span className="train-departure-point">{item.arrival.to.city.name}</span>
                        <span className="train-departure-station">{item.arrival.to.railway_station_name}</span>
                      </div>
                    </div>}

                  </div>
      
                  <div className="train-place-prices">
                    
                    <ul>
                      {classes.map((itemClass, index) => (
                        <React.Fragment key={index}>
                          {item.departure.price_info[itemClass.traiClass] &&
                            <li>
                              <span className="type">{itemClass.nameClass}</span> <span className="seats">{item.departure.available_seats_info[itemClass.traiClass]}</span>oт <span className="place-ticket-price">{item.departure.price_info[itemClass.traiClass].top_price}<span
                            className="rub-vector-small"></span></span>
                            </li>
                          }
                        </React.Fragment>
                      ))}
                    </ul>
                    <div className="train-comfort-available-props">
                      {item.departure.have_wifi && <span className="comfort-props_vector icon-wifi"></span>}
                      {item.departure.is_express && <span className="comfort-props_vector icon-express"></span>}
                      {item.departure.have_air_conditioning && <span className="comfort-props_vector icon-condition"></span>}</div>
                    <button className="select-seats" onClick={()=>handleSeats(item)}>Выбрать места</button>
                  </div>
      
                </li>
              ))}
            </ul>
          </section>
          <RoutesFooter />
        </React.Fragment>
      }

    </section>
  );
}