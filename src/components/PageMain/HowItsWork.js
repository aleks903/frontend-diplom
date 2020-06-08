import React from 'react';

export default function HowItsWork() {
  return (
    <section className="how-its-work" id="how-its-work">
      <div className="container">
        <div className="how-its-work_title-block">
          <h2 className="how-its-work_title">Как это работает</h2>
          <button className="how-its-work_knowMore-button">Узнать больше</button>
        </div>
        <div className="how-its-work_content">
          <div className="how-its-work_content-first">
            <div className="how-its-work_content-first-vector how-its-work_content-vector"></div>
            <h3>Удобный заказ на сайте</h3>
          </div>
          <div className="how-its-work_content-second">
            <div className="how-its-work_content-second-vector how-its-work_content-vector"></div>
            <h3>Нет необходимости ехать в офис</h3>
          </div>
          <div className="how-its-work_content-last">
            <div className="how-its-work_content-last-vector how-its-work_content-vector"></div>
            <h3>Огромный выбор направлений</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
