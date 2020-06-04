import React,{useEffect} from "react";
import styles from "./message.module.css";
const Message = ({ message: { user, text }, name }) => {
  let isUser = false;
  let trimmed = name.trim().toLowerCase();
  if (trimmed == user) {
    isUser = true;
  }
  return isUser ? (
    <div className={`${styles.messenger1}`}>
      <p>you</p>
      <div className={`${styles.msgbox} `}>
        <p>{text} </p>
      </div>
    </div>
  ) : (
    <div className={`${styles.messenger2}`} >
      <div className={`${styles.msgbox}`}>
        <p>{text} </p>
      </div>
      <p>{user}</p>
    </div>
  );
};

export default Message;

// import React, { Component } from 'react';
// class Message extends Component {
//   state = { 
//     user:'',
//     text:'',
//     name:''
//    }
//   isUser = false;

//   componentWillReceiveProps({ message: { user, text }, name }){
//     this.setState({user,text,name})
//   }
//   shouldComponentUpdate(nextProps) {
//     return false;
// }
//   render() { 
//     {console.log("in render.....")}
//     const {user,text,name} = this.state;
//     console.log("state ",text,user,name);

//     let trimmed = name.trim().toLowerCase();
//     if (trimmed == user) {
//       this.isUser = true;
//     }
//   return <p>hi</p>
//   }
// }
 
// export default Message;
