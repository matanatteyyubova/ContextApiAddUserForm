import React ,{Component}from 'react';
import Navbar from './Navbar';
import Users from './Users';

class App extends Component {
   

   
    render (){
        return (
            <div className='container'>
                <Navbar title={"User App"} />
               <Users />
            </div>
        );
    }
   
};

export default App;