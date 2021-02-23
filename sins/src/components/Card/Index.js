import React from 'react';
import '../Card/Style.css'
import shortid from "shortid";



function action(e) {

  e.preventDefault();
  console.log(e)
  
}


function Card() {
  return <div>
    <div className='cardBody animation' onClick={action} >
      I love the smell of fresh plastic in my lungs in the morning.
    </div>
  </div>;
}

export default Card;