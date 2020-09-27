import React from 'react';

const NewsSlider = () => {
    return (
        <section className="section news">
        <div className="container news__container">
          <div className="wrapper news__wrapper">
            <div className="news__slider">
              <ul className="news__slider__list-items">
                <li className="news__slider-item news__slider-item-active galaxyZFlip">
                </li>
              </ul>
              <button className="news__slider__btn news__slider__btn-left"></button>
              <button className="news__slider__btn news__slider__btn-right"></button>
              <ul className="news__slider__list-points">
                <li className="news__slider-points--item points--active"></li>
                <li className="news__slider-points--item"></li>
                <li className="news__slider-points--item"></li>
                <li className="news__slider-points--item"></li>
                <li className="news__slider-points--item"></li>
                <li className="news__slider-points--item"></li>
                <li className="news__slider-points--item"></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}

export default NewsSlider;