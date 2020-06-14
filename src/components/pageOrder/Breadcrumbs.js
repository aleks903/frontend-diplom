import React from 'react';

export default function Breadcrumbs(props) {
  const { step } = props;
  const steps = [
    'Билеты',
    'Пассажиры',
    'Оплата',
    'Проверка',
  ];

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs-before"></div>
      <ul className="breadcrumbs-list container">
        {steps.map((item, index) => (
          <li className={`breadcrumb ${index <= Number(step) ? 'breadcrumb-active' : ''}`} key={index}>
            <span className="icon">{index + 1}</span>{item}
          </li>
        ))}
        {/* <li className="breadcrumb breadcrumb-active"><a href="#"><span className="icon">1</span>Билеты</a></li>
        <li className="breadcrumb"><span className="icon">2</span>Пассажиры</li>
        <li className="breadcrumb"><span className="icon">3</span>Оплата</li>
        <li className="breadcrumb"><span className="icon">4</span>Проверка</li> */}
      </ul>
      <div className="breadcrumbs-after"></div>
    </div>
  );

}