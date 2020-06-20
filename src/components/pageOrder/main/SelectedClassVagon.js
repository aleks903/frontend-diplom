import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSelectVagon } from '../../../actions/selectRouteSeatsAcions';

import SeatSelect from './SeatSelect';

export default function SelectedClassVagon() {
  // const { itemClassVagons } = props;
  const { vagons, selectedClassVagon, selectedVagon } = useSelector((state) => state.selectRouteSeats);
  const dispatch = useDispatch();

  const [activeVagons, setActiveVagons] = useState([]);
  
  useEffect(() => {
    setActiveVagons(
      vagons.filter((item) => {
        if (item.coach.class_type === selectedClassVagon) {
          return item;
        }
      })
    );
  }, [vagons, selectedClassVagon]);


  const changeActiveVagon = (nameVagon) => {
    let itemSelectedVagon = [];
    if (selectedVagon.includes(nameVagon)) {
      itemSelectedVagon = selectedVagon.filter((item)=> item !== nameVagon);
    } else {
      itemSelectedVagon = [...selectedVagon, nameVagon];
    }
    dispatch(fetchSelectVagon({selectedVagon: itemSelectedVagon}));
  };
  
  return (
    <React.Fragment>
      <div className="wagon-numbers">
        <p className="numbers-title">Вагоны</p>
        <ul className="wagon-numbers-list">
          {activeVagons && activeVagons.map((itemVagon, index) => (
            <li
              className={`${selectedVagon.includes(itemVagon.coach.name) ? 'active-' : ''}wagon-number`}
              onClick={()=>changeActiveVagon(itemVagon.coach.name)}
              key={index}
            >
              {itemVagon.coach.name}
            </li>  
          ))}
        </ul>
        <p className="number-disclamer">Нумерация вагонов начинается с головы поезда</p>
      </div>
      {!!selectedVagon.length && selectedVagon.map((activeVagon, index) => (
        <SeatSelect itemVagon={vagons.filter((item) => activeVagon === item.coach.name)[0]} key={index} />
      ))}
    </React.Fragment>
  );
}
