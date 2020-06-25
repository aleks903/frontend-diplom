import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSelectWagon } from '../../../actions/selectRouteSeatsAcions';

import SeatSelect from './SeatSelect';

export default function SelectedClassWagon() {
  // const { itemClassWagons } = props;
  const { wagons, selectedClassWagon, selectedWagon } = useSelector((state) => state.selectRouteSeats);
  const dispatch = useDispatch();

  const [activeWagons, setActiveWagons] = useState([]);
  
console.log(selectedClassWagon);
console.log(selectedWagon);
console.log(wagons);

  useEffect(() => {
    setActiveWagons(
      wagons.filter((item) => {
        if (item.coach.class_type === selectedClassWagon) {
          return item;
        }
      })
    );
  }, [wagons, selectedClassWagon]);


  const changeActiveWagon = (nameWagon) => {
    let itemSelectedWagon = [];
    if (selectedWagon.includes(nameWagon)) {
      itemSelectedWagon = selectedWagon.filter((item)=> item !== nameWagon);
    } else {
      itemSelectedWagon = [...selectedWagon, nameWagon];
    }
    dispatch(fetchSelectWagon({selectedWagon: itemSelectedWagon}));
  };
  
  return (
    <React.Fragment>
      <div className="wagon-numbers">
        <p className="numbers-title">Вагоны</p>
        <ul className="wagon-numbers-list">
          {activeWagons && activeWagons.map((itemWagon, index) => (
            <li
              className={`${selectedWagon.includes(itemWagon.coach.name) ? 'active-' : ''}wagon-number`}
              onClick={()=>changeActiveWagon(itemWagon.coach.name)}
              key={index}
            >
              {itemWagon.coach.name}
            </li>  
          ))}
        </ul>
        <p className="number-disclamer">Нумерация вагонов начинается с головы поезда</p>
      </div>
      {!!selectedWagon.length && selectedWagon.map((activeWagon, index) => (
        <SeatSelect itemWagon={wagons.filter((item) => activeWagon === item.coach.name)[0]} key={index} />
      ))}
    </React.Fragment>
  );
}
