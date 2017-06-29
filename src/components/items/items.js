import React from 'react';

import AddCard from './../addCard/addCard';


const ItemsLi = (props) => {
    return (
      <section className='display-item'>
        <div className='wrapper'>
          <AddCard myItems={props} />
        </div>
      </section>
    )
}

export default ItemsLi;