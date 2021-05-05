import React from 'react';
import './OfferItem.css';

function OfferItem({offer}) {
    return (
        <div className="offerItem">
            <h3 className="topTitle">{offer.topTitle}</h3>
            <img src={offer.img} alt="offerDescription"/>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <a className="btn">{offer.btnText}</a>
        </div>
    )
}

export default OfferItem
