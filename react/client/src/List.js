import React from 'react';
import DelButton from './DelButton';
import ComButton from './ComButton';
import style from './App.css';

const List = props => (
  <div>
    <ul>
      {
        props.app.state.items.map((item, index) => <p key={index}>{item} 
        <ComButton className={style.btn} app={props.app} 
        items={props.app.state.items} index={index}/> 
        <DelButton className={style.btn} app={props.app}
        items={props.app.state.items} index={index}/></p>)
      }
    </ul>
  </div>
  
  
);

export default List;