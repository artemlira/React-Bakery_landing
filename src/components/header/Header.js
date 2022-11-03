import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">BKR</div>
          <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item"><a href="#" className="nav__link">About</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Products</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Recipes</a></li>
            </ul>
          </nav>
          <div className="header__btn"><a href="#">Contact</a></div>
        </div>
      </div>
    </header>
  )
}

