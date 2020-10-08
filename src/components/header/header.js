import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="container header">
        <div className="wrapper header__wrapper">
          <nav className="header__nav">
            <Link to="/">
              <img src="./assets/svg/logo.svg" alt="logo" className="header__logo" />
            </Link>
            <ul className="header__nav-list">
              <li className="header__item">
                <a className="header__item-link" onClick={() => document.querySelector('.aboutSection').scrollIntoView()} >About us</a> 
              </li>
              <li className="header__item">
                <a className="header__item-link" onClick={() => document.querySelector('.catalog').scrollIntoView()}>Catalog</a>
              </li>
              <li className="header__item">
                <a className="header__item-link" onClick={() => document.querySelector('.news').scrollIntoView()}>News</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header;