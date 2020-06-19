import React, { useState, useEffect } from 'react';

import SeatSelect from './SeatSelect';

export default function SelectedClassVagon(props) {
  const { itemClassVagons } = props;
  const [activeVagon, setActiveVagon] = useState([]);

  useEffect(() => {
    setActiveVagon([]);
  }, [itemClassVagons])

  const changeActiveVagon = (nameVagon) => {
    // console.log(nameVagon);
    if (activeVagon.includes(nameVagon)) {
      setActiveVagon(activeVagon.filter((item)=> item !== nameVagon));
    } else {
      setActiveVagon(prevState => [...prevState, nameVagon]);
    }
  };
  
  console.log(itemClassVagons);
  console.log(activeVagon);
  return (
    <React.Fragment>
      <div className="wagon-numbers">
        <p className="numbers-title">Вагоны</p>
        <ul className="wagon-numbers-list">
          {itemClassVagons && itemClassVagons.map((itemVagon, index) => (
            <li
              className={`${activeVagon.includes(itemVagon.coach.name) ? 'active-' : ''}wagon-number`}
              onClick={()=>changeActiveVagon(itemVagon.coach.name)}
              key={index}
            >
              {itemVagon.coach.name}
            </li>  
          ))}
          {/* <li className="wagon-number">07</li>
          <li className="active-wagon-number">09</li> */}
        </ul>
        <p className="number-disclamer">Нумерация вагонов начинается с головы поезда</p>
      </div>
      {!!activeVagon.length && activeVagon.map((activeVagon, index) => (
        <SeatSelect itemVagon={itemClassVagons.filter((item) => activeVagon === item.coach.name)[0]} key={index} />
      ))}
    </React.Fragment>
  );
}
