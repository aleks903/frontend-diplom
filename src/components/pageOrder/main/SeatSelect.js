import React, { useState, useEffect } from 'react';

export default function SeatSelect(props) {
  const { itemVagon } = props;

  console.log(itemVagon);

  return (
    <div className="seat-select-form">
      <div className="big-wagon-num">
        <p className="big-num">{itemVagon.coach.name}</p>
        <p>вагон</p>
      </div>
      <div className="wagon-description">
        <div className="seats-positions">
          <p>Места <span className="available-seats">11</span></p>
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