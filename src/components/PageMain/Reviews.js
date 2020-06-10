import React, { useState } from 'react';

export default function Reviews() {
  const [numbList, setNumbList] = useState(0);
  const reviewsUser = [
    {
      userName: 'Екатерина Вальнова',
      img: './img/first-test-user-photo.png',
      text: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.'
    },
    {
      userName: 'Евгений Стрыкало',
      img: './img/second-test-user-photo.png',
      text: 'СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.'
    },
    {
      userName: 'Екатерина Вальнова-1',
      img: './img/first-test-user-photo.png',
      text: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.'
    },
    {
      userName: 'Евгений Стрыкало-1',
      img: './img/second-test-user-photo.png',
      text: 'СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.'
    },
  ];

  const handleChange = (index) => {
    setNumbList(index);
  }
  
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <h2 className="reviews_title">Отзывы</h2>
        <div className="reviews_slider">
          <ul className="reviews_slider_list" style={{marginLeft: (-1450 * numbList) + 'px'}}>
            {reviewsUser.map((itemReview) => (
              <li className="reviews_slider_list-item">
                <img className="review_list-item_img" src={itemReview.img} alt={itemReview.userName} />
                <div className="review_list-item_textBox">
                  <p className="review_list-item_username">{itemReview.userName}</p>
                  <p className="review_list-item_text">{itemReview.text}</p>
                </div>
              </li>
            ))}
          </ul>
          
          <ul className="reviews_slider_pagination-list">
            {[...Array(reviewsUser.length / 2)].map((i, index) => (
              <li className={numbList === index ?
                "reviews_slider_pagination-item-active reviews_slider_pagination-item" :
                "reviews_slider_pagination-item"} onClick={()=>handleChange(index)}></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}