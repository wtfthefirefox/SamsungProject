import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const NewsSlider = () => {
  const onChangeNewsSlider = (sign) => {
    let catalogItems = document.querySelector('.news__slider__list-items');

    if (!catalogItems.style.transform) {
      if (sign === '+') {
          catalogItems.style.transform += `translateX(0px)`;
      } else {
          catalogItems.style.transform += `translateX(${sign === '-' ? '-': ''}1366px)`; 
      }
    } else {
      catalogItems.style.transform.split(' ').forEach(item => {
          if (item.includes('translateX')) {
              let transformValue = sign === '-' ? parseInt(item.slice(11, item.length - 3), 10) - 1366 : parseInt(item.slice(11, item.length - 3), 10) + 1366

              if (transformValue <= 0 && Math.abs(transformValue) / 1366 < document.querySelectorAll('.news__slider-item').length) {
                  catalogItems.style = `transform: translateX(${transformValue}px)`;
              } 
          }
      });
    }
  };

  useEffect (() => {
    const newsSlider = document.querySelector('.news__slider__list-points');
    
    newsSlider.addEventListener('click', (e) => {
      document.querySelectorAll('.news__slider-points--item').forEach((item, idx) => {
        if (e.target.parentNode === newsSlider) {
          if (item.classList.contains('points--active')) {
            item.classList.remove('points--active');
          }
          
          if (e.target === item) {
            item.classList.add('points--active');
            document.querySelector('.news__slider__list-items').style = `transform: translateX(-${1366 * (idx)}px)`;
          }
        }
      })
    });
  });

  return (
      <section className="section news">
      <div className="container news__container">
        <div className="wrapper news__wrapper">
          <div className="news__slider">
            <ul className="news__slider__list-items" style={{transform: "translateX(0px)"}} >
              <li className="news__slider-item" >
                <Link to="/item">
                  <img src="../../../assets/img/36Gy2aThDCQVXxbX7yyRtF.jpg" />
                </Link>
              </li>
              <li className="news__slider-item">
                <img src="../../../assets/img/samsungWatch3.png" />
              </li>
              <li className="news__slider-item">
                <img src="../../../assets/img/s20+.jpg" />
              </li>
            </ul>
            <ul className="news__slider__list-points" >
              <li className="news__slider-points--item points--active" />
              <li className="news__slider-points--item" />
              <li className="news__slider-points--item" />
              {/* <li className="news__slider-points--item" />
              <li className="news__slider-points--item" />
              <li className="news__slider-points--item" />
              <li className="news__slider-points--item" /> */}
            </ul>
          </div>
          <button className="news__slider__btn news__slider__btn-left" onClick={() => onChangeNewsSlider('+')} />
          <button className="news__slider__btn news__slider__btn-right" onClick={() => onChangeNewsSlider('-')} />
        </div>
      </div>
    </section>
  )
}

export default NewsSlider;