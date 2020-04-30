import React, { Component } from 'react'
import Users from '../component/users/users/users';
import {connect} from 'react-redux'
import Spinner from '../component/UI/SPINNER/Spinner';
import Search from '../component/users/users/Search';
import *as action from '../store/action/index';

 class users extends Component {
   

searchUsers=(text)=>{
      this.props.onGetUser(text)    
}

clearUsers= ()=>{
   this.props.onClear(this.props.users)
}


    render() {
        return (
            <div>

        
           <div className="container">
         
           <Search
            showUser={this.props.users.length > 0 ? true :false} searchUsers={this.searchUsers} clearUsers={this.clearUsers}
           
            />
           </div>
           <hr/>
                <div className="container">
                {this.setAlert}
          {this.props.loading ? <Spinner/>: 
          <Users 
          users={this.props.users} />}

                </div>
                </div>
        )
    }
}


const mapStateToProps=state=>{
    return{
        users:state.http.users,
        loading:state.http.loading
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onGetUser:(text)=>dispatch(action.GetUserhttp(text)),
        onClear:(users)=>dispatch(action.clear(users))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(users)