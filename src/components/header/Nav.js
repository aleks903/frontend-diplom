import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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
          </li>
          <li className="top-menu_nav-item">
            <Link to="/#how-it-works" onClick={onLinkClick}>Как это работает</Link>
          </li>
          <li className="top-menu_nav-item">
            <Link to="/#reviews" onClick={onLinkClick}>Отзывы</Link>
          </li>
          <li className="top-menu_nav-item">
            <Link to="/#contacts" onClick={onLinkClick}>Контакты</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
