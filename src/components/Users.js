import React, { Component } from 'react';
 import User from './User';
 import UserConsumer from './context';


class Users extends Component {
    
    render() {
       return(
           <UserConsumer>
               {
                  value =>{
                      const {users} =value;
                      return (
                        <div>
                            {
                                users.map(user =>{
                                    return(
                                        <User
                                          id={user.id} 
                                          key={user.id}
                                          name={user.name}
                                          salary={user.salary}
                                        vezife={user.vezife}
                                         
                                        />
                                    )
                                })
                            }
                        </div>
                    );
                  } 
               }
           </UserConsumer>
       )
        
    }
}

export default Users;
