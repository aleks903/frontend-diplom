import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer-wrap">
        <div className="container">
          <div className="footer-wrap_contacts">
            <p className="footer-wrap_contacts-title">Свяжитесь с нами</p>
            <ul className="footer-wrap_contacts-list">
              <li className="contacts-list-phone">
                <div className="phone-vector contacts-list-vector"></div>8 (800) 000 00 00
              </li>
              <li className="contacts-list-mail">
                <div className="mail-vector contacts-list-vector"></div>inbox@mail.ru
              </li>
              <li className="contacts-list-skype">
                <div className="skype-vector contacts-list-vector"></div>tu.train.tickets
              </li>
              <li className="contacts-list-adress">
                <div className="adress-vector contacts-list-vector"></div>г. Москва<br /> ул. Московская 27-35 555 555
              </li>
            </ul>
          </div>

          <div className="footer-wrap_subscribe">
            <p className="footer-wrap_subscribe-form-title">Подписка</p>
            <form className="footer-wrap_subscribe-form">
              <p className="footer-wrap_subscribe-form-label">Будьте в курсе событий</p>
              <div className="subscribe-form-input-container">
                <input className="subscribe_email" type="email" name="email" placeholder="e-mail" />
                <input className="subscribe_submit" type="submit" value="ОТПРАВИТЬ" />
              </div>
            </form>
            <div className="footer-wrap_subscribe-social">
              <h3 className="footer-wrap_subscribe-social-title">Подписывайтесь на нас</h3>
              <ul className="footer-wrap_subscribe-social-list">
                <li>
                  <div className="youtube-vector social-list-vector"></div>
                </li>
                <li>
                  <div className="linkedIn-vector social-list-vector"></div>
                </li>
                <li>
                  <div className="google-vector social-list-vector"></div>
                </li>
                <li>
                  <div className="facebook-vector social-list-vector"></div>
                </li>
                <li>
                  <div className="twitter-vector social-list-vector"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-end">
        <div className="container">
          <a className="footer-end_logo" href="#">Лого</a>
          <a className="footer-end_logo" href="#">
            <div className="pageUp-vector"></div>
          </a>
          <p>2018WEB</p>
        </div>
      </div>
    </footer>
  );
}
