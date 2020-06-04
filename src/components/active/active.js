import React from 'react';
import styles from './active.module.css'
const Active = ({active,name}) => {
    name = name.trim().toLowerCase();
    return ( 
        <div className={styles.active} >
            <p>Active </p>
            {console.log("????? ",name)}
            {active.map((user,id)=>user!=name?(<li className={styles.list} key={id}> {user} </li>):null)}
        </div>
     );
}
 
export default Active;