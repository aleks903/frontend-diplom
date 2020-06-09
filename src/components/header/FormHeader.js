import React from 'react';
import DirectionSearch from '../elements/DirectionSearch';


export default function FormHeader() {

  const handleSelectFrom = (item) => {
    console.log(item);
  }

  const handleSelectWhere = (item) => {
    console.log(item);
  }

  return (
    <form className="header-content_search-form">
    <div className="block-input">
      <div className="direction-form">
        <p className="form_title">Направление</p>
        <div className="element-inputs">
          {/* <input className="search-form_input from_search" placeholder="Откуда" /> */}
          <DirectionSearch
            classElement='from_search'
            placeholderElement='Откуда'
            initValue=''
            selecCity={handleSelectFrom}
          />

          <div className="reverse-points"></div>
          {/* <input className="search-form_input where_search" placeholder="Куда" /> */}
          <DirectionSearch
            classElement='where_search'
            placeholderElement='Куда'
            initValue=''
            selecCity={handleSelectWhere}
          />
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