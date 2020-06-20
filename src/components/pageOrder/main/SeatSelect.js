import React, { useState, useEffect } from 'react';

export default function SeatSelect(props) {
  const { itemVagon } = props;

  console.log(itemVagon);

  // top
  // bottom
  // 32 mest v kypeynom

  const seatsOnVagon = 32;
  const schemSeats = {
    seatTop: [],
    amountSeatTop: 0,
    seatBottom: [],
    amountSeatBottom: 0,
  };

  for (let seatsNum = 0; seatsNum < seatsOnVagon; seatsNum += 1) {
    let itemSeat = itemVagon.seats[seatsNum] ? itemVagon.seats[seatsNum] : {index: seatsNum + 1, available: false};

    if (seatsNum < 32) {

      if (seatsNum % 2) {
        if (itemSeat.available) schemSeats.amountSeatTop += 1;
        schemSeats.seatTop.push(itemSeat);
      } else {
        if (itemSeat.available) schemSeats.amountSeatBottom += 1;
        schemSeats.seatBottom.push(itemSeat);
      }
    }
  }

  console.log(schemSeats);

  return (
    <div className="seat-select-form">
      <div className="big-wagon-num">
        <p className="big-num">{itemVagon.coach.name}</p>
        <p>вагон</p>
      </div>

      <div className="wagon-description">
        <div className="seats-positions">
          <p>Места <span className="available-seats">{itemVagon.coach.available_seats}</span></p>
          <p className="seats-position">Верхние <span className="available-seats">3</span></p>
          <p className="seats-position">Нижние <span className="available-seats">8</span></p>
        </div>

        <div className="seats-prices">
          <p>Стоимость</p>
          <p className="seats-price">2920<span className="rub-vector-small"></span></p>
          <p className="seats-price">3530<span className="rub-vector-small"></span></p>
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