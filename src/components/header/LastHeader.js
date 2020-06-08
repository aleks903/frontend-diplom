import React from 'react';
import Nav from './Nav'
import FormHeader from './FormHeader';

export default function SecondHeader() {
  return (
    <header className="last-header">
    <div className="logo container">
      <a className="logo-text bold" href="#">Лого</a>
    </div>
    <Nav />

    {/* <div className="second-header-content container">
      <FormHeader />
    </div> */}
    </header>
  );
}
