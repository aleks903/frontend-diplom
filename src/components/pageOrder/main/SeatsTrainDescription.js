import React from 'react';
import moment from 'moment';

export default function SeatsTrainDescription(props) {
  const { itemTrain } = props;

  return (
    <div className="seats_train-description-wrap">
      <div className="seats_train-description">
        <span className="train-vector-small"></span>
        <div className="seats_train-route-wrap">
        <p className="seats_train-number">{itemTrain.train.name}</p>
          <ul className="seats_train-route">
            <li>{itemTrain.from.city.name}<span className="arrow-vector"></span></li>
            <li>{itemTrain.to.city.name}</li>
            {/* <li>Санкт-Петербург</li> */}
          </ul>
        </div>
      </div>
      <div className="seats_train-shipment-scheme">
        <div className="train-departure-time-wrap">
          <span className="train-departure-time">{moment(itemTrain.from.datetime).format('hh:mm')}</span>
          <span className="train-departure-point">{itemTrain.from.city.name}</span>
          <span className="train-departure-station">{itemTrain.from.railway_station_name}</span>
        </div>
        <span className="seats_travel-time-vector"></span>
        <div className="train-arrival-time">
          <span className="train-departure-time">{moment(itemTrain.to.datetime).format('hh:mm')}</span>
          <span className="train-departure-point">{itemTrain.to.city.name}</span>
          <span className="train-departure-station">{itemTrain.to.railway_station_name}</span>
        </div>
      </div>
      <div className='seats_travel-time'>
        <span className="clockworkOrange-vector"></span>
        <div className='travel-time_wrap'>
          <p className="travel-hours">{moment(itemTrain.duration).hour()} часов</p>
          <p className="travel-minutes">{moment(itemTrain.duration).minute()} минуты</p>
        </div>
      </div>
    </div>
  );
}