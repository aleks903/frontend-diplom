import React , { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchDirectionSearchRequest, fetchDirectionSearchClear } from '../../actions/directionSearchAction';

import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, switchMap, tap } from 'rxjs/operators';


export default function DirectionSearch(props) {
  const {
    classElement,
    placeholderElement,
    initValue,
    selecCity,
  } = props;
  const [arrCity, setArrCity] = useState([]);
  const [valueField, setValueField] = useState(initValue);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const el = document.querySelector(`.${classElement}`);
    const inputElChange$ = fromEvent(el, 'input')
    inputElChange$.pipe(
    map(o => o.target.value),
    debounceTime(500),
    tap(() => setLoading(true)),
    map((o) => new URLSearchParams({ name: o})),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_URL}routes/cities?${o}`)),
    ).subscribe({
    next: value => {
      setLoading(false);
      setArrCity(value);
    },
    error: error => console.error('error', error),
    complete: () => console.info('complete'),
    });

  },[])

  useEffect(() => {
    setValueField(initValue);
  },[initValue])

  const handleChange = (event) => {
    const value = event.target.value;
    setValueField(value);
  }

  const handleSelect = (item) => {
    setValueField(item.name);
    selecCity(item);
    setArrCity([]);
  }

  const handleBlur = () => {
    // const firstCity = arrCity[0] ? arrCity[0] : {id: '', name: ''};
    // setValueField(firstCity.name);
    // selecCity(firstCity);
    // setArrCity([]);
  }

  return (
    <React.Fragment>
      <div className='element-input' onBlur={handleBlur}>
        <input
          className={`${classElement} search-form_input`}
          placeholder={placeholderElement}
          onChange={handleChange}
          value={valueField}
        />
        {loading && <div className='loading'></div>}
        {!!arrCity.length && <ul className='list-city'>
          {arrCity.map((item) => (
            <li key={item._id} onClick={() => handleSelect({id: item._id, name: item.name})}>{item.name}</li>
          ))}
        </ul>}
      </div>
    </React.Fragment>
  );
}
