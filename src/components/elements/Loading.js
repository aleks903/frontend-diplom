import React from 'react';

export default function Loading() {
  return (
    <div className="loading-conteyner">
      <span>Идет поиск</span>
      <div className="loading-gif"><img src="./img/loading.gif"/></div>
    </div>
  );
}
