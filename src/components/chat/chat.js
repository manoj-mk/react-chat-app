import React,{useEffect,useState,Component} from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import Boxup from '../boxup/boxup';
import Messages from '../messages/messages';
import Input from '../input/input';
import styles from './chat.module.css';

import Active from '../active/active'
let socket;
const Chat = () => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    const [active,setActive] = useState([]);
    const ENDPOINT = "http://localhost:5000/";
    useEffect(()=>{
        const {name,room} = queryString.parse(window.location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit('join',{name,room},()=>{
            console.log("The error is occurred while joining");
        });
        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },[ENDPOINT,window.location.search]);

    useEffect(()=>{
        socket.on('message',(message)=>{
            console.log(".....msg,",message)
            setMessages([...messages,message]);
        })
    },[messages]);
  useEffect(()=>{
      console.log("pp active ",active);
      socket.on('newuser',(userlist)=>{
          console.log("-----",userlist);
          setActive(userlist);
      })
  },[active]);
    const sendMessage = (event)=>{
        event.preventDefault( );
        console.log(message);
        // setMessage(event.target.value);
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''));
            }
    }

    // console.(message,messages);
    return (
        <div className={styles.outer}>
            <Active active={active} name={name} />
            <div className={styles.inner} >
                <Boxup room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
     );
}
export default Chat;