import React from 'react';

export default function FormHeader() {
  return (
    <form className="header-content_search-form">
    <div className="block-input">
      <div className="direction-form">
        <p className="form_title">Направление</p>
        <div className="element-inputs">
          <input className="search-form_input from_search" placeholder="Откуда" />
          <div className="reverse-points"></div>
          <input className="search-form_input where_search" placeholder="Куда" />
        </div>
      </div>
      <div className="data-form">
        <p className="form_title">Дата</p>
        <div className="element-inputs">
          <input type="text" className="search-form_input departure-date" placeholder="ДД/ММ/ГГ" />
          <input type="text" className="search-form_input departure-date-back" placeholder="ДД/ММ/ГГ" />
        </div>
      </div>
    </div>
    <button className="find-tickets button-orange-black">Найти билеты</button>
    </form>
  );
}