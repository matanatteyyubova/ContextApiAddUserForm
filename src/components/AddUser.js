import React, { Component } from "react";
import uniqid from 'uniqid';
import UserConsumer from "./context";
class AddUser extends Component {
    state ={
      name: "",
      vezife : "",
      salary: ""
    }
//  changeName =(e) =>{
//    this.setState({
//      name:e.target.value
//    })
//  }
//  changeVezife =(e) =>{
//   this.setState({
//     vezife:e.target.value
//   })
// }
// changeSalary =(e) =>{
//   this.setState({
//     salary:e.target.value
//   })
// }

changeInput =(e) =>{
  this.setState({
    [e.target.name] : e.target.value
  })
}
addUser =(dispatch,e)=>{
  e.preventDefault();
  const {name,vezife,salary}=this.state;
   const newUser= {
     id: uniqid(),
     name:name,
     vezife: vezife,
     salary:salary
   }
  //  console.log(newUser);
 dispatch({type:"ADD_USER",payload:newUser});
}
  render() {
    const { name,vezife,salary} =this.state
    return <UserConsumer>
      {
        value =>{
          const {dispatch} =value
          return (
            <div className="col col-md-8 col-lg-4 col-sm-12 col-12 mb-4 ">
              <div className="card">
                <div className="card-header">
                  <h4>Add User</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.addUser.bind(this,dispatch)}>
                    <div className="form-group ">
                      <label htmlFor="name">Name</label>
                      <br />
                      <input
                        className="w-100"
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        placeholder="Enter Name"
                        onChange={this.changeInput}
                      />
                    </div>
                    <br />
                    <div className="form-group ">
                      <label htmlFor="vezife">Vezife</label>
                      <br />
                      <input
                        className="w-100"
                        type="text"
                        name="vezife"
                        id="vezife"
                        value={vezife}
                        placeholder="Vezifeni daxil et"
                        onChange={this.changeInput}
                      />
                    </div>
                    <br />
                    <div className="form-group ">
                      <label htmlFor="maas">Maas</label>
                      <br />
                      <input
                        className="w-100"
                        type="text"
                        name="salary"
                        id="maas"
                        placeholder="Maasiniz"
                        value={salary}
                        onChange={this.changeInput}
                      />
                    </div>
                    <br />
                    <button className=" btn btn-success w-100" type="submit">
                      Add User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }
      }
    </UserConsumer>
  }
}

export default AddUser;