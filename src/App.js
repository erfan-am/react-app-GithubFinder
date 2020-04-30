import React,{Component} from 'react';
import Layout from './component/Layout/Layout';
import Users from './container/users';
import {withRouter,Switch,Route} from 'react-router-dom';
import User from './component/users/users/user'
import About from './component/pages/about';
import {connect} from 'react-redux';
import * as action from './store/action/index'
class App extends Component {

  
   getUser=(username)=>{
    this.props.onUser(username)
   }



render(){
  
  return (
    <div className="App">
    <Layout/>
   <Switch>
   <Route exact path='/user/:login' render={props=>(
       <User {...props} getUser={this.getUser} user={this.props.user} />
   )}/>
   <Route exact path="/about" component={About}/>

   <Route exact path="/" component={Users}/>
   </Switch>
    </div>
  );
}
  
}

const mapStateToProps=state=>{
  return{
    user:state.http.user
  }
}

const mapDispachToProps=dispatch=>{
  return{
    onUser:(username)=>dispatch(action.userReqFainl(username))
  }
}
export default withRouter(connect(mapStateToProps,mapDispachToProps)(App));
