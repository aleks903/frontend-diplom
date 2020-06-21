import React, {useState, useEffect} from 'react';

import changeFiltrStorage, { getLastFiltr } from '../../../utils/filtr-storage';

export default function AmountTickets(props) {
  const [ticketCount, setTicketCount] = useState({
    activeTicketCount: 'adult',
    ageTicketsCount: [
      {
        ageName: 'adult',
        title: 'Взрослых',
        limit: 5,
        selected: 0,
      },
      {
        ageName: 'kids',
        title: 'Детских',
        limit: 4,
        selected: 0,
      },
      {
        ageName: 'kidsWithoutSeats',
        title: 'Детских «без места»',
        limit: 0,
        selected: 0,
      },
      
    ],
    activeSelectAmount: '',
  });


  useEffect(() => {
    const { ticketCount } = getLastFiltr();
    // console.log(ticketCount);
    if (ticketCount) {
      setTicketCount(ticketCount);
    }
  }, [])

  useEffect(() => {
    const amountPassengers = ticketCount.ageTicketsCount.reduce((sumPassengers, item) => {
      if (item.ageName === 'kidsWithoutSeats') {
        return sumPassengers;
      }
      return sumPassengers + item.selected
    }, 0);

    changeFiltrStorage({ field: 'ticketCount', value: ticketCount});
  }, [ticketCount])

  const selectPassenger = (itemSelect) => {
    setTicketCount((prevState) => ({
      ...prevState,
      activeTicketCount: itemSelect,
      // activeSelectAmount: '',
    }));
  };
  
  const changeCount = (ageName) => {
    
    setTicketCount((prevState) => ({
      ...prevState,
      activeSelectAmount: ticketCount.activeSelectAmount === '' ? ageName : '',
    }));
  }
  
  const selectAmount = (index, ageName) => {
    const changeCount = ticketCount.ageTicketsCount.map((item) => {
      if (item.ageName === ageName) {
        return {
          ...item,
          selected: index
        }
      }
      if (ageName === 'adult' && item.ageName === 'kidsWithoutSeats') {
        return {
          ...item,
          limit: index,
          selected: 0,
        }
      }
      return item;
    });

    setTicketCount((prevState) => ({
      ...prevState,
      activeSelectAmount: '',
      ageTicketsCount: changeCount,
    }));
  }

const testtt = () => {
  console.log('testttt');
}


  return (
    <div className="amount-tickets">
      <p className="ticket-count-title">Количество билетов</p>
      <div className="ticket-count-container">
        {ticketCount.ageTicketsCount.map((item, index)=>(
          <div className={`ticket-count ${ticketCount.activeTicketCount === item.ageName && 'active-count'}`} onClick={() => selectPassenger(item.ageName)} key={index}>
          <div className="count-screen">
            <p onClick={()=>changeCount(item.ageName)}>{item.title} - {item.selected}</p>
            <ul className={ticketCount.activeSelectAmount === item.ageName ? `` : 'hiden-block'}>
              {[...Array(item.limit + 1)].map((i, index) => (
                <li onClick={() => selectAmount(index, item.ageName)} key={index}>{item.title} - {index}</li>
              ))}
            </ul>
          </div>
          <p className="seat-description">
            {item.ageName === 'adult' && `Можно добавить еще ${item.limit - item.selected} пассажиров`}
            {item.ageName === 'kids' && `Можно добавить еще ${item.limit - item.selected} детей до 10 лет.Свое место в вагоне, как у взрослых,
            но дешевле в среднем на 50-65%`}
          </p>
        </div>
        ))}
      </div>
    </div>
  );
}