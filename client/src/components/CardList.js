import React from 'react';
import {useDark} from '../hooks/useDark.js';

const CardList = (props) => {
    const [darkMode, setDarkMode] = useDark(false);
    return (
        <div className="cards">
                <button type="button" onClick={()=>{setDarkMode(!darkMode)}}>Use Dark Mode</button>
            <div className="cardList">
                {props.data.map(item=>{
                    return (
                    <div className="card" key={item.id}>
                        <h2>{item.name}</h2>
                        <h3>Country:{item.country}</h3>
                        <h3>Searches:{item.searches}</h3>
                    </div>
                    );
                })}
            </div>
        </div>

      );
}

export default CardList;