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
                <a href="#" className="header__item-link">About us</a> 
              </li>
              <li className="header__item">
                <a href="#" className="header__item-link">Catalog</a>
              </li>
              <li className="header__item">
                <a href="#" className="header__item-link">News</a>
              </li>
              <li className="header__item">
                <a href="#" className="header__item-link">Support</a>
              </li> 
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header;