 import React,{useState,Component, useEffect} from 'react';
 import {Link} from 'react-router-dom';
 import styles from './join.module.css';
 const Join = () => {
     const [name,setName] = useState('');
     const [room,setRoom] = useState('');
     const [count,setCount] = useState(0);
     const Handler = ()=>{
         setCount(count+1);
     }
     return (
          <div>
              {/* <h1>Count : {count}</h1>
              <button onClick={Handler} >Increase</button>
              <Test/> */}
              <div className={styles.outer} >
             <div className={styles.inner}>
                 <input placeholder="your name" onChange={(event)=>setName(event.target.value)} />
                 <input placeholder="room name" onChange={(event)=>setRoom(event.target.value)} />
             <Link onClick={event=>(!name || !room) ?   event.preventDefault():null} to={`/chat?name=${name}&room=${room}`} >
                <button>Enter</button>
             </Link>
             </div>
         </div>
          </div>
      );
 }
 export default Join;

//  const Test = () => {
//      return ( <div>
//          {console.log("in test render")}
//          <p>Test component</p>
//      </div> );
//  }
//   class Test extends Component {
//       shouldComponentUpdate(){
//           return false;
//       }
//       render() { 
//           return ( 
//             <div>
//           {console.log("in test render")}
//           <p>Test  component</p>
//           </div> 
//            );
//       }
//   }
// const Test = () => {

//     return ( 
//         <div>
//        {console.log("in test render")}
//          <p>Test  component</p>
//          </div> 
//      );
// }
 

