import React from 'react';
import Filter from './Filter';
import LastTickets from './LastTickets';

export default function SidebarFilter() {
  return (
    <React.Fragment>
      <Filter />
      <LastTickets />
    </React.Fragment>
  )
}
