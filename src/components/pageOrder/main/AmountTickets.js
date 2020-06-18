import React from 'react';

export default function AmountTickets(props) {
  return (
    <div class="amount-tickets">
      <p class="ticket-count-title">Количество билетов</p>
      <div class="ticket-count-container">
        <div class="ticket-count active-count adult">
          <div class="count-screen">
            <p>Взрослых - 2</p>
          </div>
          <p class="seat-description">Можно добавить еще 3 пассажиров</p>
        </div>
        <div class="ticket-count kids">
          <div class="count-screen">
            <p>Детских - 1</p>
          </div>
          <p class="seat-description">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых,
            но дешевле в среднем на 50-65%</p>
        </div>
        <div class="ticket-count kidsWithoutSeats">
          <div class="count-screen">
            <p>Детских «без места» — 0</p>
          </div>
          <p class="seat-description"></p>
        </div>

      </div>
    </div>
  );
}