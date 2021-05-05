import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';

function Stars({num}) {

    const items = [];
    for(let i=1;i<=5;i++){
        if(i<=num){
            items.push(true)
        }else{
            items.push(false)
        }
    }

    let id=1;

    
    return (
        <>
            {
            items.map( e => e?
            <StarIcon key={id++}/>
            :
            <StarOutlineIcon key={id++}/>
)
            
            }
        </>
    )
}

export default Stars
