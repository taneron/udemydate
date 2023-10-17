import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Open a course on udemy.com and look at the very top of the page, no
          futher action needed.
        </p>
        <p>
          This Extension is aimed to help you decide, wheter the course suites
          you or not. Often times course creators update small things such as
          the description of lessons to seem like the latest updated course on
          the market.
        </p>
      </header>
    </div>
  );
};

export default Popup;
