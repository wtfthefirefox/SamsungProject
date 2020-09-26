import React from 'react';

import './catalog.scss';

const Catalog = () => {
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
                </div>
            </div>
        </div>
    )
}

export default Catalog;