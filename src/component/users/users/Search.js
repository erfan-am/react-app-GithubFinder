import React from 'react'
import {connect} from 'react-redux'
import * as action from '../../../store/action/index'
const Search =(props)=> {



  const  onChange=(e)=>props.onChange(e)

    const onSubmit=(e)=>{
        if(props.text ===''){
        
        }else{
            props.searchUsers(props.text);
           props.onClean(props.text)
        }
        e.preventDefault();
       
    }
  
        return (
            <div>
                <div className="row">
                <form  onSubmit={onSubmit} className="col s12">
                    
                    <div className="input-field ">
                        <input 
                        id="search" 
                        value={props.text} 
                        type="search"
                       onChange={onChange}

                        />
                        <input  type="submit" className="btn blue center-align waves-effect"/>
                        <label >Search</label>
                     {props.error && <p>asfadfdsafv</p>}
                    </div>
                </form>
                {props.showUser && <button className="red btn center-align waves-effect"  onClick={props.clearUsers}>Clear User</button> }

            </div>
        
            </div>
        )
    
}
  
const mapStateTpProps=state=>{
    return{
        text:state.http.text,
        error:state.http.error
    }
}

const mapDispatchTpProps=dispatch=>{
    return{
        onChange:(e)=>dispatch(action.Text(e)),
        onClean:(text)=>dispatch(action.TextEnd(text))
    }
}

export default  connect(mapStateTpProps,mapDispatchTpProps)(Search)
