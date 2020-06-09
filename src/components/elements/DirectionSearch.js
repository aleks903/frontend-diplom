import React , { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDirectionSearchRequest, fetchDirectionSearchClear } from '../../actions/directionSearchAction';

import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, switchMap, tap } from 'rxjs/operators';


export default function DirectionSearch(props) {
  const { items, loading, error } = useSelector((state) => state.serchDirection);
  const dispatch = useDispatch();
  const {
    classElement,
    placeholderElement,
    initValue,
    selecCity,
  } = props;
  const [arrCity, setArrCity] = useState([]);
  const [valueField, setValueField] = useState(initValue);
  
  // useEffect(() => {
  //   console.log(document.querySelector(`.${classElement}+ul`));
  // },[items])

  useEffect(() => {
    const el = document.querySelector(`.${classElement}`);
    const inputElChange$ = fromEvent(el, 'input')
    inputElChange$.pipe(
    map(o => o.target.value),
    filter(o => o.trim() !== ''),
    debounceTime(100),
    map((o) => new URLSearchParams({ name: o})),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_URL}routes/cities?${o}`)),
    ).subscribe({
    next: value => setArrCity(value),
    error: error => console.error('error', error),
    complete: () => console.info('complete'),
    });

  },[])

  const handleChange = (event) => {
    // console.log(placeholderElement);
    // // const itemStyle = placeholderElement;
    // const value = event.target.value;
    // setValueField(value);
    // dispatch(fetchDirectionSearchRequest(value));
    const value = event.target.value;
    setValueField(value);
    // dispatch(fetchDirectionSearchRequest(value));
  }

  const handleSelect = (item) => {
    setValueField(item.name);
    selecCity(item);
    setArrCity([]);
    // dispatch(fetchDirectionSearchClear());
  }

  const handleBlur = () => {
    // const firstCity = items[0] ? items[0] : {id: '', name: ''};

    // setValueField(firstCity.name);
    // selecCity(firstCity);
    // dispatch(fetchDirectionSearchClear());
  }

  return (
    <React.Fragment>

      <style>
        
      </style>

      <div className='element-input' onBlur={handleBlur}>
        <input
          className={`${classElement} search-form_input`}
          placeholder={placeholderElement}
          onChange={handleChange}
          value={valueField}
        />
        {/* {!!items.length && <ul className='list-city'>
          {items.map((item) => (
            <li key={item._id} onClick={() => handleSelect({id: item._id, name: item.name})}>{item.name}</li>
          ))}
        </ul>} */}

{!!arrCity.length && <ul className='list-city'>
          {arrCity.map((item) => (
            <li key={item._id} onClick={() => handleSelect({id: item._id, name: item.name})}>{item.name}</li>
          ))}
        </ul>}


      </div>
    </React.Fragment>
  );

}