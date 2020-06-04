import React from 'react';
import Message from '../message/message';
import styles from './messages.module.css'
import ScrollToBottom from 'react-scroll-to-bottom'
const Messages = ({messages,name}) => {
    return ( 
       <div className={styles.scroll} >
         <ScrollToBottom  >
         {messages.map((message,i)=><div key={i} ><Message message={message} name={name} /></div>)}
       </ScrollToBottom>
       </div>
     );
}
  
export default Messages;