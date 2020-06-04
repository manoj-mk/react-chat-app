import React from 'react';
import styles from './input.module.css';
const Input = ({message,setMessage,sendMessage,displayUsers}) => {
    return ( 
        <form className={styles.inputclass}>
      <input placeholder="type message..." value={message} onChange={(event)=>setMessage(event.target.value)}   onKeyPress={(event)=>event.key=='Enter'?sendMessage(event):null} />
        <button onClick={(event)=>sendMessage(event)} >Send</button>
        </form>
     ); 
}
export default Input;