import React ,{Component}from 'react';
import Navbar from './Navbar';
import Users from './Users';
import AddUser from './AddUser'
class App extends Component {
   

   
    render (){
        return (
            <div className='container'>
                <Navbar title={"User App"} />
                <AddUser/>
               <Users />
            </div>
        );
    }
   
};

export default App;