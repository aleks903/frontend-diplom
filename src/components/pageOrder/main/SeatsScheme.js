import React, { useState } from 'react';


import ItemSeats from './ItemSeats';


export default function SeatsScheme(props) {
  const { nameWagon, arrSeats, schemeName } = props;

  return (
    <React.Fragment>
      {schemeName === 'first' &&
      /* Люкс-вагон */
        <div className="seats-scheme standart luxury-wagon">
          <span className="scheme_wagon-number">{nameWagon.replace(/[^0-9]+/,'')}</span>
          <ul className="scheme_bottom-seats">
            <ItemSeats
              arrItemSeats = {arrSeats.seatTop}
              seatPrice = {arrSeats.topPrice}
              itemWagon = {nameWagon}
            />
          </ul>
        </div>
      }

      {schemeName === 'second' &&
        <div className="seats-scheme standart">
          <span className="scheme_wagon-number">{nameWagon.replace(/[^0-9]+/,'')}</span>
          <ul className="scheme_top-seats">
            <ItemSeats
              arrItemSeats = {arrSeats.seatTop}
              seatPrice = {arrSeats.topPrice}
              itemWagon = {nameWagon}
            />
          </ul>
          <ul className="scheme_bottom-seats">
            <ItemSeats
              arrItemSeats = {arrSeats.seatBottom}
              seatPrice = {arrSeats.bottomPrice}
              itemWagon = {nameWagon}
            />
          </ul>
        </div>
      }

      {schemeName === 'third' &&
      /* Схема плацкартного вагона */
        <div className="seats-scheme standart platzKarte-wagon">
          <span className="scheme_wagon-number">{nameWagon.replace(/[^0-9]+/,'')}</span>
          <ul className="scheme_top-seats">
            <ItemSeats
              arrItemSeats = {arrSeats.seatTop}
              seatPrice = {arrSeats.topPrice}
              itemWagon = {nameWagon}
            />
          </ul>
          <ul className="scheme_bottom-seats">
            <ItemSeats
              arrItemSeats = {arrSeats.seatBottom}
              seatPrice = {arrSeats.bottomPrice}
              itemWagon = {nameWagon}
            />
          </ul>
          <ul className='scheme_side-seats'>
            <ItemSeats
              arrItemSeats = {arrSeats.seatSide}
              seatPrice = {arrSeats.sidePrice}
              itemWagon = {nameWagon}
            />
          </ul>
        </div>
      }

      {schemeName === 'fourth' &&
      /* Сидячие места */
        <div className="seats-scheme seat-type">
          <span className="scheme_wagon-number">{nameWagon.replace(/[^0-9]+/,'')}</span>
          <ul className="scheme_first_lane-seats">
            <ItemSeats
              arrItemSeats = {arrSeats.seatTop}
              seatPrice = {arrSeats.topPrice}
              itemWagon = {nameWagon}
            />
          </ul>
          <ul className="scheme_second_lane-seats">
            <ItemSeats
              arrItemSeats = {arrSeats.seatBottom}
              seatPrice = {arrSeats.topPrice}
              itemWagon = {nameWagon}
            />
          </ul>
          <ul className="scheme_third_lane-seats">
            <li></li>
            <ItemSeats
              arrItemSeats = {arrSeats.seatSide}
              seatPrice = {arrSeats.topPrice}
              itemWagon = {nameWagon}
            />
            <li></li>
          </ul>
          <ul className="scheme_fourth_lane-seats">
            <ItemSeats
              arrItemSeats = {arrSeats.seatFour}
              seatPrice = {arrSeats.topPrice}
              itemWagon = {nameWagon}
            />
          </ul>
        </div>
      }
    </React.Fragment>
  )
}
