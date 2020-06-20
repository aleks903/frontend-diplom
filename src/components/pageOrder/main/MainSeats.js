import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
// import moment from 'moment';

import {
  fetchSeatsRequest,
  fetchStorageInitOrder,
  fetchSelectClassVagon
} from '../../../actions/selectRouteSeatsAcions';
import changeFiltrStorage, { getLastFiltr } from '../../../utils/filtr-storage';

import SeatsTrainDescription from './SeatsTrainDescription';
import AmountTickets from './AmountTickets';
import SelectedClassVagon from './SelectedClassVagon';


export default function MainSeats(props) {
  const { route, vagons, loading, error } = useSelector((state) => state.selectRouteSeats);
  const dispatch = useDispatch();
  const { match } = props;
  const id = match.params.id;
  const history = useHistory();

  const [arrClassVagons, setArrClassVagons] = useState([]);
  const [activeClassVagon, setActiveClassVagon] = useState();
  const [itemClassVagons, setItemClassVagons] = useState();

  const classes = {
    first: 'Люкс',
    second: 'Купе',
    third: 'Плацкарт',
    fourth: 'Сидячий',
  };

  useEffect(() => {
    console.log('tttt');
    const { order } = getLastFiltr();
    dispatch(fetchStorageInitOrder(order));
    dispatch(fetchSeatsRequest(id));
  }, []);

  useEffect(() => {
    const tempClassVagon = [];
    if (vagons.length > 0) {
      vagons.forEach(item => {
        if (!tempClassVagon.includes(item.coach.class_type)) {
          tempClassVagon.push(item.coach.class_type)
        }
      });
    }
    setArrClassVagons(tempClassVagon);
  }, [vagons])
  
  const handleChooseAnotherTrain = () => {
    changeFiltrStorage({ field: 'order', value: {}});
  }

  const selectClassVagon = (classVagon) => {
    setActiveClassVagon(classVagon);
    dispatch(fetchSelectClassVagon({classVagon}));
    // setItemClassVagons(vagons);
  }

  // console.log(itemClassVagons);
  console.log(vagons);

  return (
    <section className="seats-content main-block">
      <h1 className="seats-title">Выбор мест</h1>
      {route.departure && <div className="seats-select_departure">
        <div className="seats-select_departure_header">
          <span className="seats_departure-vector"></span>
          <Link to='/order' className='change-other-train_button' onClick={handleChooseAnotherTrain}>Выбрать другой поезд</Link>
        </div>
        <SeatsTrainDescription itemTrain={route.departure}/>

        <AmountTickets />
        <div className="wagon">
          <p className="wagon-type-title">Тип вагона</p>
          <ul className="wagon-types-list">
            {!!arrClassVagons.length && arrClassVagons.map((itemClass, index) => (
              <li
                className={`wagon-type ${itemClass}${activeClassVagon === itemClass ? '-active' : ''}`}
                key={index}
                onClick={()=>selectClassVagon(itemClass)}
              ><span className="wagon-type_vector"></span>{classes[itemClass]}</li>
            ))}
          </ul>
          <SelectedClassVagon />
          {/* {itemClassVagons && <SelectedClassVagon itemClassVagons={itemClassVagons} />} */}
        </div>
      </div>}
    </section>
  );
}