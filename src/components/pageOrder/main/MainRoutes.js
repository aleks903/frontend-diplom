import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { fetchDirectionChangeFiltr } from '../../../actions/directionSearchAction';

import RoutesHead from './RoutesHead';
import RoutesFooter from './RoutesFooter';
import Loading from '../../elements/Loading';

export default function MainRoutes() {
  const { filtr, routes, loading, error } = useSelector((state) => state.serchDirection);
  const { items } = routes;
  console.log(items);

  return (
    <section className="trains main-block">
      <RoutesHead />
      {loading && <Loading />}
      {!loading &&
        <React.Fragment>
          <section className="trains-list-container">
            <ul className="trains-list">
              {items && items.map((item, index) => (
                <li class="train">
                  <div class="train-description-wrap">
                    <div class="train-description">
                      <span class="train-vector"></span>
                      <p class="train-number">{item.departure.train.name}</p>
                      <ul class="train-route">
                        <li>
                        {item.departure.from.city.name}
                        <span class="arrow-vector"></span></li>
                        <li>{item.departure.to.city.name}<span class="arrow-vector"></span></li>
                        {/* <li>Санкт-Петербург «Волга»</li> */}
                      </ul>
                    </div>
                  </div>
                  <div class="train-travel_time-scheme-wrap">
                    <div class="train-shipment-scheme">
                      <div class="train-departure-time-wrap">
                        <span class="train-departure-time">
                          {moment(item.departure.from.datetime).format('hh:mm')}
                        </span>
                        <span class="train-departure-point">{item.departure.from.city.name}</span>
                        <span class="train-departure-station">{item.departure.from.railway_station_name}</span>
                      </div>
      
                      <div class="travel-time-wrap">
                        <span class="travel-time">{moment(item.departure.duration).format('hh:mm')}</span>
                        <span class="travel-time-vector"></span>
                      </div>
      
                      <div class="train-arrival-time">
                        <span class="train-departure-time">{moment(item.departure.to.datetime).format('hh:mm')}</span>
                        <span class="train-departure-point">{item.departure.to.city.name}</span>
                        <span class="train-departure-station">{item.departure.to.railway_station_name}</span>
                      </div>
                    </div>
      
                    {item.arrival && <div class="train-shipment-reverse-scheme">
                      <div class="train-departure-time-wrap">
                        <span class="train-departure-time">{moment(item.arrival.from.datetime).format('hh:mm')}</span>
                        <span class="train-departure-point">{item.arrival.from.city.name}</span>
                        <span class="train-departure-station">{item.arrival.from.railway_station_name}</span>
                      </div>
      
                      <div class="travel-time-wrap">
                        <span class="travel-time">{moment(item.arrival.duration).format('hh:mm')}</span>
                        <span class="travel-time-vector-reverse"></span>
                      </div>
      
                      <div class="train-arrival-time">
                        <span class="train-departure-time">{moment(item.arrival.to.datetime).format('hh:mm')}</span>
                        <span class="train-departure-point">{item.arrival.to.city.name}</span>
                        <span class="train-departure-station">{item.arrival.to.railway_station_name}</span>
                      </div>
                    </div>}

                  </div>
      
                  <div class="train-place-prices">
                    <ul>
                      <li><span class="type">Плацкарт</span> <span class="seats">52</span>oт <span class="place-ticket-price">2530<span
                            class="rub-vector-small"></span></span></li>
                      <li><span class="type">Купе</span> <span class="seats">24</span>oт <span class="place-ticket-price">3820<span
                            class="rub-vector-small"></span></span></li>
                      <li><span class="type">Люкс</span><span class="seats">15</span>oт <span class="place-ticket-price">4950<span
                            class="rub-vector-small"></span></span></li>
                    </ul>
                    <div class="train-comfort-available-props"><span class="comfort-props_vector"></span></div>
                    <button class="select-seats">Выбрать места</button>
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