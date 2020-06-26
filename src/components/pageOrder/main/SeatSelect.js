import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SeatsScheme from './SeatsScheme';

import { fetchChangeFacilities, fetchStorageInitWagon } from '../../../actions/selectRouteSeatsAcions';
import changeFiltrStorage, { getLastFiltr } from '../../../utils/filtr-storage'

export default function SeatSelect(props) {
  const { wagons, selectedClassWagon, selectedWagon, ticketCounts } = useSelector((state) => state.selectRouteSeats);
  const { itemWagon } = props;
  const dispatch = useDispatch();
  // const [facilities, setFacilities] = useState({
  //   activeFacilities: [],
  //   priceFacilities: 0,
  // });

console.log(selectedClassWagon);

  useEffect(() => {
    // const { wagons } = getLastFiltr();
    // dispatch(fetchStorageInitWagon(wagons));
    // dispatch(fetchSeatsRequest(id));
    // console.log(ticketCounts);
  }, []);
  useEffect(() => {
    // console.log(wagons);
    // console.log(itemWagon);
    changeFiltrStorage({ field: 'wagons', value: wagons });
  }, [wagons])

 
  // top
  // bottom
  // 32 mest v kypeynom

  let seatsOnWagon = null;
  switch (selectedClassWagon) {
    case 'first':
      seatsOnWagon = 16;
      break;
    case 'second':
      seatsOnWagon = 32;
      break;
    case 'third':
      seatsOnWagon = 48;
      break;
    case 'fourth':
      seatsOnWagon = 62;
      break;
  }

  const schemSeats = {
    seatTop: [],
    amountSeatTop: 0,
    topPrice: itemWagon.class_type === 'first' ? itemWagon.coach.price : itemWagon.coach.top_price,
    seatBottom: [],
    amountSeatBottom: 0,
    bottomPrice: itemWagon.coach.bottom_price,
    seatSide: [],
    amountSeatSide: 0,
    sidePrice: itemWagon.coach.side_price,
    seatFour: [],
  };

  // console.log(schemSeats);

  for (let seatsNum = 0; seatsNum < seatsOnWagon; seatsNum += 1) {
    let itemSeat = itemWagon.seats[seatsNum] ? itemWagon.seats[seatsNum] : {index: seatsNum + 1, available: false, seatSelected: false };

    if (itemWagon.coach.class_type !== 'first') {
      if (seatsNum < 32) {
        if (seatsNum % 2) {
          if (itemSeat.available) schemSeats.amountSeatTop += 1;
          schemSeats.seatTop.push(itemSeat);
        } else {
          if (itemSeat.available) schemSeats.amountSeatBottom += 1;
          schemSeats.seatBottom.push(itemSeat);
        }
      } else if (selectedClassWagon === 'third') {
        if (itemSeat.available) schemSeats.amountSeatSide += 1;
        schemSeats.seatSide.push(itemSeat);
      } else if (selectedClassWagon === 'fourth') {
        if (itemSeat.available) schemSeats.amountSeatTop += 1;
        if (seatsNum % 2 && seatsNum !== 61) {
          schemSeats.seatSide.push(itemSeat);
        } else {
          schemSeats.seatFour.push(itemSeat);
        }
      }
    } else {
        if (itemSeat.available) schemSeats.amountSeatTop += 1;
        schemSeats.seatTop.push(itemSeat);
    }
  }

  const changeFacilities = (facilitiesName, facilitiesPrice) => {
    // console.log(facilitiesName !== 'linens');
    if (itemWagon.coach.is_linens_included && facilitiesName === 'linens') {
      return;
    }

    let tempFacilities = null;
    const { activeFacilities, priceFacilities } = itemWagon.facilities;
    if (activeFacilities.includes(facilitiesName)) {
      tempFacilities = {
        activeFacilities: activeFacilities.filter((item)=> item !== facilitiesName),
        priceFacilities: priceFacilities - facilitiesPrice,
      };
    } else {
      tempFacilities = {
        activeFacilities: [...activeFacilities, facilitiesName],
        priceFacilities: priceFacilities + facilitiesPrice,
      };
    }

    // setFacilities(tempFacilities);

    const nameWagon = itemWagon.coach.name;
    dispatch(fetchChangeFacilities({nameWagon, facilities: tempFacilities}));

    
  }
  // console.log(facilities);

  // console.log(schemSeats);
  

  return (
    <React.Fragment>
      <div className="seat-select-form">
        <div className="big-wagon-num">
          <p className="big-num">{itemWagon.coach.name}</p>
          <p>вагон</p>
        </div>

        <div className="wagon-description">
          <div className="seats-positions">
            <p>Места <span className="available-seats">{schemSeats.amountSeatTop + schemSeats.amountSeatBottom + schemSeats.amountSeatSide}</span></p>
            {itemWagon.coach.class_type !== 'first' &&
            itemWagon.coach.class_type !== 'fourth' &&
              <React.Fragment>
                <p className="seats-position">Верхние <span className="available-seats">{schemSeats.amountSeatTop}</span></p>
    
                <p className="seats-position">Нижние <span className="available-seats">{schemSeats.amountSeatBottom}</span></p>
    
                {itemWagon.coach.class_type === 'third' &&
                  <p className="seats-position">Боковое <span className="available-seats">{schemSeats.amountSeatSide}</span></p>
                }
              </React.Fragment>
            }
          </div>

          <div className="seats-prices">
            <p>Стоимость</p>
            {itemWagon.coach.class_type === 'first' &&
              <p className="seats-price">{itemWagon.coach.price}<span className="rub-vector-small"></span></p>
            }
            {itemWagon.coach.class_type === 'fourth' &&
              <p className="seats-price">{itemWagon.coach.top_price}<span className="rub-vector-small"></span></p>
            }


            {itemWagon.coach.class_type !== 'first' &&
            itemWagon.coach.class_type !== 'fourth' &&
              <React.Fragment>
                <p className="seats-price">{itemWagon.coach.top_price}<span className="rub-vector-small"></span></p>
    
                <p className="seats-price">{itemWagon.coach.bottom_price}<span className="rub-vector-small"></span></p>
    
                {itemWagon.coach.class_type === 'third' &&
                  <p className="seats-price">{itemWagon.coach.side_price}<span className="rub-vector-small"></span></p>
                }
              </React.Fragment>
            }
          </div>

          <div className="wagon-facilities">
            <p>Обслуживание <span className="service-company-name">ФПК</span></p>
            <ul className="facilities-list">
            
              {itemWagon.coach.have_air_conditioning &&
                <li data-title="Кондиционер" className={`facilities-vector conditioner${itemWagon.facilities.activeFacilities.includes('conditioner') ? ' active conditioner-active' : ''}`} onClick={() => changeFacilities('conditioner', 0)}></li>
              }
              {itemWagon.coach.have_wifi &&
                <li data-title="Wi-Fi" className={`facilities-vector wifi${itemWagon.facilities.activeFacilities.includes('wifi') ? ' active wifi-active' : ''}`} onClick={() => changeFacilities('wifi', itemWagon.coach.wifi_price)}></li>
              }
              <li data-title="Белье"  className={`facilities-vector linens${itemWagon.coach.is_linens_included ? ' included linens-included' : itemWagon.facilities.activeFacilities.includes('linens') ? ' active linens-active' : ''}`}  onClick={() => changeFacilities('linens', itemWagon.coach.linens_price)}></li>

              <li data-title="Питание" className={`facilities-vector food${itemWagon.facilities.activeFacilities.includes('food') ? ' active food-active' : ''}`} onClick={() => changeFacilities('food', 0)}></li>

            </ul>
          </div>
        </div>
      </div>
      <div className="seats-disclamer">
        <p>11 человек выбирают места в этом поезде</p>
      </div>

      <SeatsScheme
        nameWagon={itemWagon.coach.name}
        arrSeats={schemSeats}
        schemeName = {itemWagon.coach.class_type}

      />
               
            <div className="total-price">8080<span className="rub-vector-small"></span></div>
    </React.Fragment>
  );
}