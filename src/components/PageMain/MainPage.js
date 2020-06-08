import React from 'react';
import FirstHeader from '../header/FirstHeader'
import Footer from '../footer/Footer'
import AboutUs from './AboutUs';
import HowItsWork from './HowItsWork';
import Reviews from './Reviews';

export default function MainPage() {
  return (
    <React.Fragment>
      <FirstHeader />
      <AboutUs />
      <HowItsWork />
      <Reviews />
      <Footer />
    </React.Fragment>
  );
}