import React from 'react';

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
  }

  return (
      <section className="section news">
      <div className="container news__container">
        <div className="wrapper news__wrapper">
          <div className="news__slider">
            <ul className="news__slider__list-items">
              <li className="news__slider-item" >
                <img src="../../../assets/img/36Gy2aThDCQVXxbX7yyRtF.jpg" />
              </li>
              <li className="news__slider-item">
                <img src="../../../assets/img/samsungWatch3.png" />
              </li>
              <li className="news__slider-item">
                <img src="../../../assets/img/s20+.jpg" />
              </li>
            </ul>
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
          <button className="news__slider__btn news__slider__btn-left" onClick={() => onChangeNewsSlider('+')}></button>
          <button className="news__slider__btn news__slider__btn-right" onClick={() => onChangeNewsSlider('-')}></button>
        </div>
      </div>
    </section>
  )
}

export default NewsSlider;