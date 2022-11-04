import React from 'react';
import './about.scss';
import { images } from '../ImagesDB';

export default function About() {
  return (
    <section className="about">
      <div className="about__container container">
        <div className="about__column__left">
          <p className="about__sience">Sience 1984</p>
          <h3 className="about__title">Fresh Bakery Every Day</h3>
          <p className="about__text">Even the all-powerful Pointing has no control about the blind texts it is an almost.</p>
        </div>
        <div className="about__column__right"></div>
      </div>
    </section>
  )
}
