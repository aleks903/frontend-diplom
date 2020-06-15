import React from 'react';

export default function MainSeats(props) {
  const { match } = props;
  const id = match.params.id;

  fetch( `https://netology-trainbooking.herokuapp.com/routes/${id}/seats` )
    .then( response => response.json())
    .then( data => console.log( data ));
  
  console.log(id);
  return (
    <p>id</p>
  );
}