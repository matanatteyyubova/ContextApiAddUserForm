import React, { Component } from "react";

const UserContext = React.createContext();
// Provider ,Consumer
const reducer =(state,action)=>{
  switch(action.type){
    case "DELETE_USER":
      return {
        ...state,
        users:state.users.filter(user =>action.payload !== user.id)
      }
      case "ADD_USER" :
        return{
          ...state,
          users:[...state.users,action.payload]
        }
    default :
      return state
      
  }
}

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Murad Eliyev",
        vezife: "IT mutexessis",
        salary: "2000",
      },
      {
        id: 2,
        name: "Ehmed Eliyev",
        vezife: "IT mutexessis",
        salary: "4000",
      },
      {
        id: 3,
        name: "Anar Veliyev",
        vezife: "Marketin mutexessis",
        salary: "1400",
      },
    ],
    dispatch: action =>{
      this.setState(state => reducer(state,action))
    }
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
