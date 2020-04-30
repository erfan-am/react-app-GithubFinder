import React, { Fragment,useEffect } from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../../../component/UI/SPINNER/Spinner';
import {connect} from 'react-redux'

const User=(props)=> {

    useEffect(()=>{
        props.getUser(props.match.params.login)
        //kk
    },[])
 
  
        const {
            name,
            login,
            avatar_url,
            location,
            bio,
            blog,
            html_url,
            following,
            followers,
            public_repos,
            public_gists,
            company
        }=props.user;



        return (
            <Fragment>
                <Link to="/"  className="btn ">Back To Search</Link>
                <br/>
               {props.loading ? <Spinner/> :
                <div className="card">

                            
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="responsive-img circle " style={{width:'200px'}} src={avatar_url}/>
                    <h4>{name}</h4>
                    <p>{location}</p>
                    <a href={html_url} className="btn">Visite the profile</a>
                </div>

                    <div className="card-content col s4 ">
                    <h1>Bio</h1>
                    <p className="flow-text">{bio}</p>
                    </div>
                <ul className="collection">
                {login && <Fragment>
                    <li className="collection-item"> Username: <strong>{login}</strong></li>
                
                </Fragment>}  
                {company && <Fragment>
                    <li className="collection-item">Company: <strong>{company}</strong></li>
                
                </Fragment>}   
                {blog && <Fragment>
                    <li className="collection-item">Website: <a href={blog} className="btn none">{blog}</a></li>
                
                </Fragment>}
                <li className="collection-item left">
                <span className="new badge red">Followers: {followers}</span>
                    <span className="new badge blue">Following: {following}</span>
                    <span className="new badge green">Public Repos: {public_repos}</span>
                    <span className="new badge yello">Public Gists: {public_gists}</span>

                </li>
                </ul>

                    
                </div>
               }
            </Fragment>
        )
    }



    const mapStateToProps=state=>{
        return{
        loading:state.http.loading
        }
      }
      

export default connect(mapStateToProps,null)(User)