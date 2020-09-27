import React from 'react';

import './catalog.scss';

const Catalog = () => {
    const onChangeCatalog = (sign) => {
        let catalogItems = document.querySelector('.catalog__items');

        if (!catalogItems.style.transform) {
            if (sign === '+') {
                catalogItems.style.transform += `translateX(0px)`;
            } else {
               catalogItems.style.transform += `translateX(${sign === '-' ? '-': ''}1280px)`; 
            }
        } else {
            catalogItems.style.transform.split(' ').forEach(item => {
                if (item.includes('translateX')) {
                    let transformValue = sign === '-' ? parseInt(item.slice(11, item.length - 3), 10) - 1280 : parseInt(item.slice(11, item.length - 3), 10) + 1280

                    if (transformValue <= 0 && Math.abs(transformValue) / 1280 < Math.round(document.querySelectorAll('.catalog__item').length / 3)) {
                        catalogItems.style = `transform: translateX(${transformValue}px)`;
                    } 
                }
            });
        }
    }
    
    return (
        <div className="catalog">
            <div className="container">
                <div className="catalog__wrapper">
                    <h2 className="catalog__title">Catalog</h2>
                    <ul className="catalog__items">
                        <li className="catalog__item">
                            <div className="catalog__item-wrapper">
                                <img className="catalog__item-img" src="../../assets/img/GalaxyA71.png"/>
                                <h3 className="catalog__item-title">Galaxy A71</h3>
                            </div>
                        </li>
                        <li className="catalog__item">
                            <div className="catalog__item-wrapper">
                                <img className="catalog__item-img" src="../../assets/img/GalaxyS20.png"/>
                                <h3 className="catalog__item-title">Galaxy S20</h3>
                            </div>
                        </li>
                        <li className="catalog__item">
                            <div className="catalog__item-wrapper">
                                <img className="catalog__item-img" src="../../assets/img/GalaxyNote20.png"/>
                                <h3 className="catalog__item-title">Galaxy Note20</h3>
                            </div>
                        </li>
                        <li className="catalog__item">
                            <div className="catalog__item-wrapper">
                                <img className="catalog__item-img" src="../../assets/img/GalaxyA51.png"/>
                                <h3 className="catalog__item-title">Galaxy A51</h3>
                            </div>
                        </li>
                        <li className="catalog__item">
                            <div className="catalog__item-wrapper">
                                <img className="catalog__item-img" src="../../assets/img/GalaxyNote10.png"/>
                                <h3 className="catalog__item-title">Galaxy Note10</h3>
                            </div>
                        </li>
                        <li className="catalog__item">
                            <div className="catalog__item-wrapper">
                                <img className="catalog__item-img" src="../../assets/img/GalaxyZFlip.png"/>
                                <h3 className="catalog__item-title">Galaxy Z Flip</h3>
                            </div>
                        </li>
                    </ul>
                    <button type="button" className="catalog__slider-btn catalog__slider-btn--left" onClick={() => onChangeCatalog('+')}/>
                    <button type="button" className="catalog__slider-btn catalog__slider-btn--right" onClick={() => onChangeCatalog('-')}/>
                </div>
            </div>
        </div>
    )
}

export default Catalog;