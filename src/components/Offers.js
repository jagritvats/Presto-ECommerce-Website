import React from 'react';
import './Offers.css';

import GroceryImg from '../images/offers_groceries.jpg'
import CardImg from '../images/card_img.jpg'
import PlusImg from '../images/offers_plus.jpg'

import OfferItem from './layout/OfferItem';

function Offers() {

    const offers = [
        {
            img:GroceryImg,
            topTitle:'Pickup or delivery',
            title:'Groceries & even more',
            description:'1919 Davis St, San Leandro',
            btnText: 'Start Your Order',
            link: ''
        },
        {
            img:CardImg,
            topTitle:'Earn 5% cash back',
            title:'Earn 5% cash back',
            description:'every day on Presto.com',
            btnText: 'Learn how',
            link: ''
        },
        {
            img:PlusImg,
            topTitle:'No order minimum shipping',
            title:'For Presto+ members',
            description:'Start your free trial today. Restrictions apply',
            btnText: 'Try it free',
            link: ''
        }
    ];

    let id=1;

    return (
        <div className="offersContainer container">
            {
                offers.map((offer)=>(
                    <OfferItem offer={offer} key={id++}/>
                ))
            }
        </div>
    )
}

export default Offers
