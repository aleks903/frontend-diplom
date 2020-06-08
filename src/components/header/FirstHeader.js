import React from 'react';
import Nav from './Nav'
import FormHeader from './FormHeader';

export default function FirstHeader() {
  return (
    <header className="first_header">
    <div className="logo container">
      <a className="logo-text" href="#">Лого</a>
    </div>
    <Nav />
    <div className="header-content container">
      <h1 className="header-content_title">Вся жизнь - <span className="bold">путешествие!</span></h1>
      <div className="first-header-content">
        <FormHeader />
      </div>
    </div>
    </header>
  );
}
