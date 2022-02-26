import React,{Component} from 'react';
import UserConsumer from './context';

class User extends Component {

    state ={
        isVisible:false
    }

    
 onEventClick =(e)=>{
    this.setState({
        isVisible: !this.state.isVisible
    }) 
 }

 onDeleteUser =(dispatch,e)=>{
     const {id} =this.props;
    // Consumer Dispatch
    dispatch({type:"DELETE_USER", payload:id})
 }
    render(){
        // Destructing
        const {name,vezife,salary} = this.props;
        const {isVisible} = this.state
       return(
           <UserConsumer>
               {
                   value =>{
                       const {dispatch}=value;
                       return (
                        <div className='col col-md-8 col-lg-4 col-sm-12 col-12 mb-4 '>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                 <h4 className='d-inline' onClick={this.onEventClick.bind(this)}> {name}</h4>
                                 <i onClick={this.onDeleteUser.bind(this,dispatch)} className="fa-solid fa-trash-can" style={{cursor:"pointer"}}></i>
                                </div>
                                {isVisible ?  <div className="card-body">
                                    <p className="card-text">Maas: {salary}</p>
                                    <p className="card-text">Vezife: {vezife}</p>
                                  
                                </div> : null}
                               
                            </div>
                            
                        </div>
                    );
                   }
               }
           </UserConsumer>
       )

    }
   
};

export default User;