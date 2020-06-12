import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { fetchDirectionChangeFiltr } from '../../../actions/directionSearchAction';

import DateInput from '../../elements/DateInput';
import CheckBox from '../../elements/CheckBox';
import DropDownFiltr from '../../elements/DropDownFiltr';
import RangeInput from '../../elements/RangeInput';

export default function Filter() {
  const { filtr } = useSelector((state) => state.serchDirection);
  const dispatch = useDispatch();

  const handleFromDate = (item) => {
    if (moment(item).isAfter(moment(filtr.date_end))) {
      dispatch(fetchDirectionChangeFiltr({
        date_start: item,
        date_end: item,
      }));
    } else {
      dispatch(fetchDirectionChangeFiltr({
        date_start: item,
      }));
    };
  }
  
  const handleWhereDate = (item) => {
    dispatch(fetchDirectionChangeFiltr({
      date_end: item,
    }));
  }

  

  return (
    <section className="filters">
      <div className="date-filter">
        <div className="date-filter_departure">
          <p>Дата поездки</p>
          <DateInput
            classElement='date-filter_input filter_departure-date'
            selectDate={handleFromDate}
            initDate={filtr.date_start}
          />
        </div>
        <div className="date-filter_departure-back">
          <p>Дата возвращения</p>
          <DateInput
            classElement='date-filter_input filter_departure-date-back'
            selectDate={handleWhereDate}
            initDate={filtr.date_end}
            minValueDate={filtr.date_start}
          />
        </div>
      </div>

      <div className="options">
        <ul className="options-list">
          <CheckBox
            labelClass = 'coupe-vector'
            label = 'Купе'
            paramsName = 'have_second_class'
          />
          <CheckBox
            labelClass = 'platzKarte-vector'
            label = 'Плацкарт'
            paramsName = 'have_third_class'
          />
          <CheckBox
            labelClass = 'seat-vector'
            label = 'Сидячий'
            paramsName = 'have_fourth_class'
          />
          <CheckBox
            labelClass = 'luxury-vector'
            label = 'Люкс'
            paramsName = 'have_first_class'
          />
          <CheckBox
            labelClass = 'wifi-vector'
            label = 'Wi-Fi'
            paramsName = 'have_wifi'
          />
          <CheckBox
            labelClass = 'express-vector'
            label = 'Экспресс'
            paramsName = 'have_express'
          />
        </ul>
      </div>

      <div className="price-filter">
        <p className="price-filter-title">Cтоимость</p>

        <span className="start-cost-title">От</span>
        <span className="max-cost-title">До</span>
        
        <div className="circle-container">
          <RangeInput
          min={1920}
          max={7000}
          step={10}
          startMin={1920}
          startMax={4500}
          classEl = {{
            activeTrack: 'line-colored',
            maxLabel: 'max-cost',
            minLabel: 'hiden-block',
            slider: 'circle-1',
            track: 'line-gray',
            valueLabel: 'limit-cost',
          }}
          paramsName={{
            forMinValue: 'price_from',
            forMaxValue: 'price_to'
          }}
          />
        </div>
      </div>

      <div className="time-filter">

        <div className="departure_time-filters_container">
          <DropDownFiltr title='Туда' classIcon='departure-vector'>
            <div className="filters_container-to">
              <div className="departure-time">
                <p className="time-filter-title">Время отбытия</p>
                <div className="circle-container time-container">

                  <RangeInput
                    min={0.00}
                    max={24.00}
                    step={1}
                    format='time'
                    startMin={0}
                    startMax={11.00}
                    classEl = {{
                      activeTrack: 'timeline-colored',
                      maxLabel: 'max-cost',
                      minLabel: 'hiden-block',
                      slider: 'time-circle-1',
                      track: 'timeline-gray',
                      valueLabel: 'limit-cost',
                    }}
                    paramsName={{
                      forMinValue: 'start_departure_hour_from',
                      forMaxValue: 'start_departure_hour_to'
                    }}
                  />
                </div>
              </div>

              <div className="arrival-time">
                <p className="time-filter-title arrival-title">Время прибытия</p>
                <div className="circle-container time-container">
                <RangeInput
                  min={0.00}
                  max={24.00}
                  step={1}
                  format='time'
                  startMin={0}
                  startMax={11.00}
                  classEl = {{
                    activeTrack: 'timeline-colored',
                    maxLabel: 'max-cost',
                    minLabel: 'hiden-block',
                    slider: 'time-circle-1',
                    track: 'timeline-gray',
                    valueLabel: 'limit-cost',
                  }}
                  paramsName={{
                    forMinValue: 'start_arrival_hour_from',
                    forMaxValue: 'start_arrival_hour_to'
                  }}
                />
                </div>
              </div>
            </div>
          </DropDownFiltr>
        </div>

        <div className="departure-back_time-filters_container">
          <DropDownFiltr title='Обратно' classIcon='arrival-vector'>
            <div className="filters_container-back">
              <div className="departure-time">
                <p className="time-filter-title">Время отбытия</p>
                <div className="circle-container time-container">
                  <RangeInput
                    min={0.00}
                    max={24.00}
                    step={1}
                    format='time'
                    startMin={0}
                    startMax={11.00}
                    classEl = {{
                      activeTrack: 'timeline-colored',
                      maxLabel: 'max-cost',
                      minLabel: 'hiden-block',
                      slider: 'time-circle-1',
                      track: 'timeline-gray',
                      valueLabel: 'limit-cost',
                    }}
                    paramsName={{
                      forMinValue: 'end_departure_hour_from',
                      forMaxValue: 'end_departure_hour_to'
                    }}
                  />
                </div>
              </div>
              <div className="arrival-time">
                <p className="time-filter-title arrival-title">Время прибытия</p>
                <div className="circle-container time-container">
                  <RangeInput
                      min={0.00}
                      max={24.00}
                      step={1}
                      format='time'
                      startMin={0}
                      startMax={11.00}
                      classEl = {{
                        activeTrack: 'timeline-colored',
                        maxLabel: 'max-cost',
                        minLabel: 'hiden-block',
                        slider: 'time-circle-1',
                        track: 'timeline-gray',
                        valueLabel: 'limit-cost',
                      }}
                      paramsName={{
                        forMinValue: 'end_arrival_hour_from',
                        forMaxValue: 'end_arrival_hour_to'
                      }}
                    />
                </div>
              </div>
            </div>
          </DropDownFiltr>
        </div>
      </div>
    </section>
  );
}
