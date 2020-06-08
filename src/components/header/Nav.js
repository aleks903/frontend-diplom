import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const onLinkClick = () => {
    console.log('click');
// если переход не с главной страницы очищаем редьюсеры, сбрасываем шаги оформления заказа
  };

  return (
    <div className="top-menu">
      <nav className="top-menu_wrapper container">
        <ul className="top-menu_nav-items">
          <li className="top-menu_nav-item">
            <Link to="/#about-us">О нас</Link>
            {/* <a href="#about-us">О нас</a> */}
          </li>
          <li className="top-menu_nav-item">
            <Link to="/#how-it-works" onClick={onLinkClick}>Как это работает</Link>
            {/* <a href="#how-its-work">Как это работает</a> */}
          </li>
          <li className="top-menu_nav-item">
            <Link to="/#reviews" onClick={onLinkClick}>Отзывы</Link>
            {/* <a href="#reviews">Отзывы</a> */}
          </li>
          <li className="top-menu_nav-item">
            <Link to="/#contacts" onClick={onLinkClick}>Контакты</Link>
            {/* <a href="#contacts">Контакты</a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}
