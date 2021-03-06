import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
// import moment from 'moment';

import {
  fetchSeatsRequest,
  fetchStorageInitOrder,
  fetchStorageInitWagon,
  fetchSelectClassWagon,
} from '../../../actions/selectRouteSeatsAcions';
import changeFiltrStorage, { getLastFiltr } from '../../../utils/filtr-storage';

import SeatsTrainDescription from './SeatsTrainDescription';
import AmountTickets from './AmountTickets';
import SelectedClassWagon from './SelectedClassWagon';
import Loading from '../../elements/Loading';


export default function MainSeats(props) {
  const { route, wagons, loading, error } = useSelector((state) => state.selectRouteSeats);
  const dispatch = useDispatch();
  const { match } = props;
  const id = match.params.id;
  const history = useHistory();

  const [arrClassWagons, setArrClassWagons] = useState([]);
  const [activeClassWagon, setActiveClassWagon] = useState();

  const classes = {
    first: 'Люкс',
    second: 'Купе',
    third: 'Плацкарт',
    fourth: 'Сидячий',
  };

  useEffect(() => {
    const { order, wagons } = getLastFiltr();
    dispatch(fetchStorageInitOrder(order));
    if(wagons && wagons.length > 0) {
      dispatch(fetchStorageInitWagon(wagons));
    } else {
      dispatch(fetchSeatsRequest(id));
    }
  }, []);

  useEffect(() => {
    const tempClassWagon = [];
    if (wagons.length > 0) {
      wagons.forEach(item => {
        if (!tempClassWagon.includes(item.coach.class_type)) {
          tempClassWagon.push(item.coach.class_type)
        }
      });
    }
    setArrClassWagons(tempClassWagon);
  }, [wagons])
  
  const handleChooseAnotherTrain = () => {
    dispatch(fetchSelectClassWagon({classWagon: null}));
    changeFiltrStorage({ field: 'order', value: {}});
    changeFiltrStorage({ field: 'wagons', value: []});

  }

  const selectClassWagon = (classWagon) => {
    setActiveClassWagon(classWagon);
    dispatch(fetchSelectClassWagon({classWagon}));
  }

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
          {loading && <Loading />}
          {!loading && 
          <React.Fragment>
            <ul className="wagon-types-list">
              {!!arrClassWagons.length && arrClassWagons.map((itemClass, index) => (
                <li
                  className={`wagon-type ${itemClass}${activeClassWagon === itemClass ? '-active' : ''}`}
                  key={index}
                  onClick={()=>selectClassWagon(itemClass)}
                ><span className="wagon-type_vector"></span>{classes[itemClass]}</li>
              ))}
            </ul>
            <SelectedClassWagon />
          </React.Fragment>
          }
          {/* {itemClassWagons && <SelectedClassWagon itemClassWagons={itemClassWagons} />} */}
        </div>
      </div>}
    </section>
  );
}