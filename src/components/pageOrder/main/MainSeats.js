import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchSeatsRequest } from '../../../actions/selectRouteSeatsAcions';
import moment from 'moment';

export default function MainSeats(props) {
  const { route, seats, loading, error } = useSelector((state) => state.selectRouteSeats);
  const dispatch = useDispatch();
  const { match } = props;
  const id = match.params.id;

  useEffect(() => {
    console.log('tttt');
    dispatch(fetchSeatsRequest(id));
  }, [])
  
  console.log(route);
  console.log(seats);
  // fetch( `https://netology-trainbooking.herokuapp.com/routes/${id}/seats` )
  //   .then( response => response.json())
  //   .then( data => console.log( data ));
  
  console.log(id);
  return (
    <p>id</p>
  );
}