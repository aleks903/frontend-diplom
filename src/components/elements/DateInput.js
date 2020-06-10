import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';

export default function DateInput(props) {
  const [selectedDate, setSelectedDate] = useState('');
  const { classElement, selectDate, initDate, minValueDate } = props;

  const onDateChange = (date) => {
    // let paramsName = this.props.name === 'fromDate' ? 'date_start' : 'date_end';
    // this.props.setDate(date, paramsName)
    setSelectedDate(date);
    selectDate(moment(date).format('YYYY-DD-MM'));
    // console.log(moment(date).format('YYYY-DD-MM'));
  }

  useEffect(() => {
    // console.log(!initDate ? initDate : moment(initDate, 'YYYY-DD-MM')._d);
    setSelectedDate(initDate ? moment(initDate, 'YYYY-DD-MM')._d : initDate);
  }, [initDate]);

  return (
    <React.Fragment>
      {/* <input type="text" className="search-form_input departure-date" placeholder="ДД/ММ/ГГ" /> */}
      <DatePicker
          dateFormat="dd.MM.yyyy"
          locale={ru}
          placeholderText="ДД/ММ/ГГ"
          className={`search-form_input ${classElement}`}
          selected={selectedDate}
          onChange={date => onDateChange(date)}
          value={selectedDate}
          minDate={minValueDate ? moment(minValueDate, 'YYYY-DD-MM')._d : minValueDate}
        />
    </React.Fragment>
  );
}