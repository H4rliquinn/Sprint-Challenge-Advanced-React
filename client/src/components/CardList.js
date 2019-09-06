import React from 'react';
import {useDark} from '../hooks/useDark.js';

const CardList = (props) => {
    const [darkMode, setDarkMode] = useDark(false);
    return (
        <div className="cardList">
            <button type="button" onClick={()=>{setDarkMode(!darkMode)}}>Use Dark Mode</button>
            {props.data.map(item=>{
                return <h2 key={item.id}>{item.name}</h2>
            })}
        </div>
      );
}

export default CardList;