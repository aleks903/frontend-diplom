import React from 'react';

export default function AboutUs() {
  return (
    <section className="about-us" id="about-us">
    <div className="about-us_wrap container">
      <h2 className="about-us_title">О нас</h2>
      <div className="about-us_content">
        <p> Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше
          людей заказывают жд билеты через интернет.</p>
        <p>Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?<br />
          Мы расскажем о преимуществах заказа через интернет.</p>
        <p className="bold">Покупать жд билеты дешево можно за 90 суток до    отправления поезда.<br />
        Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
      </div>
    </div>
    </section>
  );
}
