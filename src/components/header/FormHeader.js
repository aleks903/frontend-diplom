import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import DirectionSearch from '../elements/DirectionSearch';
import DateInput from '../elements/DateInput';

import { fetchDirectionChangeFiltr } from '../../actions/directionSearchAction';

export default function FormHeader() {
  const { filtr } = useSelector((state) => state.serchDirection);
  const dispatch = useDispatch();
  const history = useHistory();

  const [dataSearchTickets, setDataSearchTickets] = useState({
    fromCity: {},
    whereCity: {},
    fromDate: '',
    whereDate: '',
  });
  const [initCity, setInitCity] = useState({
    nameFrom: '',
    nameWhere: '',
  });

  const handleSelectFrom = (item) => {
    setDataSearchTickets((prevState) => ({...prevState, fromCity: item}));
  }

  const handleSelectWhere = (item) => {
    setDataSearchTickets((prevState) => ({...prevState, whereCity: item}));
  }

  const handleFromDate = (item) => {
    if (moment(item).isAfter(moment(dataSearchTickets.whereDate))) {
      setDataSearchTickets((prevState) => ({...prevState, fromDate: item, whereDate: item}));
    } else {
      setDataSearchTickets((prevState) => ({...prevState, fromDate: item}));
    };
  }

  const handleWhereDate = (item) => {
    setDataSearchTickets((prevState) => ({...prevState, whereDate: item}));
  }

  const handleRevers = () => {
    const reverseCity = {
      newFrom: dataSearchTickets.whereCity,
      newWhere: dataSearchTickets.fromCity,
    };
    setInitCity({
      nameFrom: reverseCity.newFrom.name,
      nameWhere: reverseCity.newWhere.name,
    });
    setDataSearchTickets((prevState) => ({
      ...prevState,
      fromCity: reverseCity.newFrom,
      whereCity: reverseCity.newWhere,
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(fetchDirectionChangeFiltr(dataSearchTickets));
    
    history.push('/order');
    // fetch( `https://netology-trainbooking.herokuapp.com/routes?from_city_id=${dataSearchTickets.fromCity.id}&to_city_id=${dataSearchTickets.whereCity.id}` )
    // .then( response => response.json()
    //     .then( data => { console.log( 'routes',  data ) })
    // );
  }

  // console.log(filtr);

  return (
    <form className="header-content_search-form" onSubmit={handleSearch}>
    <div className="block-input">
      <div className="direction-form">
        <p className="form_title">Направление</p>
        <div className="element-inputs">
          {/* <input className="search-form_input from_search" placeholder="Откуда" /> */}
          <DirectionSearch
            classElement='from_search'
            placeholderElement='Откуда'
            initValue={initCity.nameFrom}
            selecCity={handleSelectFrom}
          />

          <div className="reverse-points" onClick={handleRevers}></div>
          {/* <input className="search-form_input where_search" placeholder="Куда" /> */}
          <DirectionSearch
            classElement='where_search'
            placeholderElement='Куда'
            initValue={initCity.nameWhere}
            selecCity={handleSelectWhere}
          />
        </div>
      </div>
      <div className="data-form">
        <p className="form_title">Дата</p>
        <div className="element-inputs">
          <DateInput
            classElement='departure-date'
            selectDate={handleFromDate}
            initDate={dataSearchTickets.fromDate}
          />
          {/* <input type="text" className="search-form_input departure-date" placeholder="ДД/ММ/ГГ" /> */}
          <DateInput
            classElement='departure-date-back'
            selectDate={handleWhereDate}
            initDate={dataSearchTickets.whereDate}
            minValueDate={dataSearchTickets.fromDate}
          />
          {/* <input type="text" className="search-form_input departure-date-back" placeholder="ДД/ММ/ГГ" /> */}
        </div>
      </div>
    </div>
    <button className="find-tickets button-orange-black">Найти билеты</button>
    </form>
  );
}
