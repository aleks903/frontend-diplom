import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function SeatSelect(props) {
  const { vagons, selectedClassVagon, selectedVagon } = useSelector((state) => state.selectRouteSeats);
  const { itemVagon } = props;

  console.log(itemVagon);
 
  // top
  // bottom
  // 32 mest v kypeynom

  let seatsOnVagon = null;
  switch (selectedClassVagon) {
    case 'first':
      seatsOnVagon = 18;
      break;
    case 'second':
      seatsOnVagon = 32;
      break;
    case 'third':
      seatsOnVagon = 48;
      break;
    case 'fourth':
      seatsOnVagon = 62;
      break;
  }

  const schemSeats = {
    seatTop: [],
    amountSeatTop: 0,
    seatBottom: [],
    amountSeatBottom: 0,
    seatSide: [],
    amountSeatSide: 0,
  };

  for (let seatsNum = 0; seatsNum < seatsOnVagon; seatsNum += 1) {
    let itemSeat = itemVagon.seats[seatsNum] ? itemVagon.seats[seatsNum] : {index: seatsNum + 1, available: false};

    if (itemVagon.coach.class_type !== 'first' &&
    itemVagon.coach.class_type !== 'fourth') {
      if (seatsNum < 32) {
        if (seatsNum % 2) {
          if (itemSeat.available) schemSeats.amountSeatTop += 1;
          schemSeats.seatTop.push(itemSeat);
        } else {
          if (itemSeat.available) schemSeats.amountSeatBottom += 1;
          schemSeats.seatBottom.push(itemSeat);
        }
      }
      if (selectedClassVagon === 'third') {
        if (itemSeat.available) schemSeats.amountSeatSide += 1;
        schemSeats.seatSide.push(itemSeat);
      }
    } else {
        if (itemSeat.available) schemSeats.amountSeatTop += 1;
        schemSeats.seatTop.push(itemSeat);
    }
  }

  console.log(schemSeats);
  console.log(itemVagon.coach.class_type);

  return (
    <div className="seat-select-form">
      <div className="big-wagon-num">
        <p className="big-num">{itemVagon.coach.name}</p>
        <p>вагон</p>
      </div>

      <div className="wagon-description">
        <div className="seats-positions">
          <p>Места <span className="available-seats">{schemSeats.amountSeatTop + schemSeats.amountSeatBottom + schemSeats.amountSeatSide}</span></p>
          {itemVagon.coach.class_type !== 'first' &&
          itemVagon.coach.class_type !== 'fourth' &&
            <React.Fragment>
              <p className="seats-position">Верхние <span className="available-seats">{schemSeats.amountSeatTop}</span></p>
  
              <p className="seats-position">Нижние <span className="available-seats">{schemSeats.amountSeatBottom}</span></p>
  
              {itemVagon.coach.class_type === 'third' &&
                <p className="seats-position">Боковое <span className="available-seats">{schemSeats.amountSeatSide}</span></p>
              }
            </React.Fragment>
          }
        </div>

        <div className="seats-prices">
          <p>Стоимость</p>
          {itemVagon.coach.class_type === 'first' &&
            <p className="seats-price">{itemVagon.coach.price}<span className="rub-vector-small"></span></p>
          }
          {itemVagon.coach.class_type === 'fourth' &&
            <p className="seats-price">{itemVagon.coach.top_price}<span className="rub-vector-small"></span></p>
          }


          {itemVagon.coach.class_type !== 'first' &&
          itemVagon.coach.class_type !== 'fourth' &&
            <React.Fragment>
              <p className="seats-price">{itemVagon.coach.top_price}<span className="rub-vector-small"></span></p>
  
              <p className="seats-price">{itemVagon.coach.bottom_price}<span className="rub-vector-small"></span></p>
  
              {itemVagon.coach.class_type === 'third' &&
                <p className="seats-price">{itemVagon.coach.side_price}<span className="rub-vector-small"></span></p>
              }
            </React.Fragment>
          }
        </div>

        <div className="wagon-facilities">
          <p>Обслуживание <span className="service-company-name">ФПК</span></p>
          <ul className="facilities-list">
            <li data-title="Кондиционер" className="facilities-vector conditioner"></li>
            <li data-title="Wi-Fi" className="facilities-vector wifi active wifi-active"></li>
            <li data-title="Белье" className="facilities-vector linens included linens-included"></li>
            <li data-title="Питание" className="facilities-vector food"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}