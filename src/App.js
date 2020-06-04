import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Join from './components/join/join';
import Chat from './components/chat/chat';
import Test from './components/test/test';
const App = () => {
    return ( 
        <div>
            <Router>
                <Route exact path="/" component={Join}/>
                <Route path="/chat" component={Chat}/>
                <Route path="/test" component={Test}/>
            </Router>
        </div>
     );
}
export default App;