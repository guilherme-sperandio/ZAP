import React from 'react';
import './chatintro.css'
import FavoriteIcon from '@material-ui/icons/Favorite';

export default () =>{
    return(
        <div className="chatintro">
            <img src="https://cdn.discordapp.com/attachments/640024344776540162/753347579789443143/947237_531011203611787_1515511670_n.jpg" alt=""/>
            <h1>
                ZIPZOP DO PASTOR
            </h1>
            <h2>  
                Made by giant for giant.
                <FavoriteIcon fontSize="small" style={{color: '#FF00FF'}}/>
            </h2>
        </div>
    );
}