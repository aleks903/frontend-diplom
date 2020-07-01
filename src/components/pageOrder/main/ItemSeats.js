import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchChangePassengersSeats } from '../../../actions/selectRouteSeatsAcions';

export default function ItemSeats(props) {
  const {
    route,
    wagons,
    ticketCounts,
    selectedWagon,
    selectedSeats,
    loading,
    error
  } = useSelector((state) => state.selectRouteSeats);
  const dispatch = useDispatch();

  const { arrItemSeats, seatPrice, itemWagon } = props;

  // const [seatSelected, setSeatSelected] = useState();

  const totalPassangersCount = ticketCounts.ageTicketsCount[0].selected + ticketCounts.ageTicketsCount[1].selected;

  const handleSelectedSeat = (event) => {
    const { classList, dataset } = event.currentTarget;
    if (!classList.contains('place_is_taken')) {
      let itemSeats = {
        ...selectedSeats
      };

      const itemChangeSeat = Number(dataset.indexSeat);
      // console.log(event.currentTarget, itemWagon);
      console.log(ticketCounts);
      

      if (selectedSeats.itemsSeats.includes(itemChangeSeat)) {
        itemSeats['itemsSeats'] = selectedSeats.itemsSeats.filter((item) => item !== itemChangeSeat);
        itemSeats['passengersSeats'] = selectedSeats.passengersSeats.filter((item) => item.index !== dataset.indexSeat);
      } else {
        if (totalPassangersCount === selectedSeats.itemsSeats.length) {
          itemSeats['itemsSeats'].pop();
          itemSeats['passengersSeats'].pop();
        }
        itemSeats['itemsSeats'].push(itemChangeSeat);
        itemSeats['passengersSeats'].push(
          {
            index: dataset.indexSeat,
            price: dataset.price,
          }
        );
      }

      dispatch(fetchChangePassengersSeats({itemSeats}));
    }
  }




  // console.log(selectedSeats);
  // console.log(ticketCounts);
  // console.log(totalPassangersCount);
  // console.log(route);
  // console.log(wagons);
  // console.log(selectedWagon);

  // console.log(arrItemSeats);

  return (
    <React.Fragment>
      {arrItemSeats.map((itemSeat) => (
        <li className={`${itemSeat.available ? totalPassangersCount > 0 ? 'available-place' : 'place_is_taken' : 'place_is_taken'}`}
        data-price={seatPrice}
        data-index-seat={itemSeat.index}
        data-seat-select={itemSeat.seatSelected}
        onClick = {handleSelectedSeat}
        key={itemSeat.index}
        >
          <div className={selectedSeats.itemsSeats.includes(itemSeat.index) ? ' seat-selected' : 'no'}>
            {itemSeat.index}
          </div>
        </li>
      ))}
    </React.Fragment>
  )
}


