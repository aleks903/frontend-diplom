import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ItemSeats(props) {
  const { route, wagons, ticketCounts, loading, error } = useSelector((state) => state.selectRouteSeats);
  const dispatch = useDispatch();

  const { arrItemSeats, seatPrice, itemWagon } = props;

  const [seatSelected, setSeatSelected] = useState();

  const handleSelectedSeat = (event) => {
    if (event.currentTarget.className !== 'place_is_taken') {
      console.log(event.currentTarget, itemWagon);
      console.log(ticketCounts);

    }
  }

  
  return (
    <React.Fragment>
      {arrItemSeats.map((itemSeat) => (
        <li className={`${itemSeat.available ? 'available-place' : 'place_is_taken'}`}
        data-price={seatPrice}
        data-index-seat={itemSeat.index}
        onClick = {handleSelectedSeat}
        key={itemSeat.index}
        >
          <div className={itemSeat.seatSelected ? ' seat-selected' : ''}>
            {itemSeat.index}
          </div>
        </li>
      ))}
    </React.Fragment>
  )
}