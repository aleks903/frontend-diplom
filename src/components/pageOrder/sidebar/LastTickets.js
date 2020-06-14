import React, { useState, useEffect } from 'react';

export default function LastTickets() {
  const [listTickets, setListTickets] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}routes/last`);
      if(response.ok) {
        const items = await response.json();
        setListTickets(items);
      }
    })();
  }, [])
  
  return (
    <section className="overlooked-tickets">
      <p>Последние билеты</p>
      <ul>
        {listTickets && listTickets.map((item, index) => (
            <li className="overlooked-ticket" key={index}>
              <div className="points">
                <div className="departure-point">
                  <span className="point-name">{item.departure.from.city.name}</span>
                  <span className="point-station">{item.departure.from.railway_station_name}</span>
                </div>
                <div className="arrival-point">
                  <span className="point-name">{item.departure.to.city.name}</span>
                  <span className="point-station">{item.departure.to.railway_station_name}</span>
                </div>
              </div>
              <div className="comfort-price">
                <div className="train-comfort-props">
                  {item.have_wifi && <span className="comfort-props_vector icon-wifi"></span>}
                  {item.is_express && <span className="comfort-props_vector icon-express"></span>}
                  {item.have_air_conditioning && <span className="comfort-props_vector icon-condition"></span>}
                </div>
                <div className="overlooked-ticket-price">
                  oт <span className="ticket-price">{item.min_price}</span>
                  <span className="rub-vector"></span>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
