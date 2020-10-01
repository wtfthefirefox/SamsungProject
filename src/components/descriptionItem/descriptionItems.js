import React from 'react';

import "./descriptionItem.scss";

const DescriptonItem = () => {
    return (
        <div className="container">
            <div className="descriptonItem__wrapper">
                <h2 className="descriptonItem__title">Samsung Galaxy Z Fold 2</h2>
                <div className="descriptonItem__content-wrapper">
                    <img src="../../assets/img/ZFold.png" width="500px" height="500px"/>
                    <ul className="descriptonItem__list">
                        <li className="descriptonItem__item">
                            <h3 className="descriptonItem__item-title">Price</h3>
                            <span className="descriptonItem__item-content">Starts at 1199$</span>
                        </li>
                        <li className="descriptonItem__item">
                            <h3 className="descriptonItem__item-title">Choose your color</h3>
                            <ul className="descriptonItem__list-colors">
                                <li className="descriptonItem__colors-item descriptonItem__colors-item__black descriptonItem__colors-item--active" />
                                <li className="descriptonItem__colors-item descriptonItem__colors-item__pink" />
                            </ul>
                        </li>
                        <li className="descriptonItem__item">
                            <h3 className="descriptonItem__item-title">Warranty</h3>
                            <span className="descriptonItem__item-content">1 year</span>
                        </li>
                        <li className="descriptonItem__item">
                            <h3 className="descriptonItem__item-title">Weight</h3>
                            <span className="descriptonItem__item-content">282 g</span>
                        </li>
                        <li className="descriptonItem__item">
                            <h3 className="descriptonItem__item-title">Main display</h3>
                            <span className="descriptonItem__item-content">7.6'' QXGA+ Dynamic AMOLED 2X (22.5:18) Infinity Flex Display (2208x1768) HDR10+ certified 120Hz refresh rate</span>
                        </li>
                        <li className="descriptonItem__item">
                            <h3 className="descriptonItem__item-title">Cover display</h3>
                            <span className="descriptonItem__item-content">6.2'' HD+ Super AMOLED Display (25:9) (2260x816)</span>
                        </li>
                        <li className="descriptonItem__item">
                            <h3 className="descriptonItem__item-title">Description</h3>
                            <span className="descriptonItem__item-content">The full screen phone that folds to fit in your pocket with revolutionary flexible display, a camera made to stand on its own, and a dual battery that lasts all day. Meet the phone changing the shape of the future.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DescriptonItem;