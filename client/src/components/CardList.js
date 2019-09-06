import React from 'react';

const CardList = (props) => {
    return (
        <div className="cardList">
            {props.data.map(item=>{
                return <h2>{item.name}</h2>
            })}
        </div>
      );
}

export default CardList;