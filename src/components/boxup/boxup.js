import React from 'react';
import styles from './boxup.module.css'
const Boxup = ({room}) => {
    return ( 
        <div className={styles.container}>
            <p>{room}</p>
        </div>
     );
}
 
export default Boxup;
