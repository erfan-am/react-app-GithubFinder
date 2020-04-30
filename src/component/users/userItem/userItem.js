import React from 'react'
import {Link} from 'react-router-dom'
const userItem =(props)=> {


        const {login,avatar_url} =props.user
        return (
            <div className="card center">
                <img src={avatar_url} alt="" className=" circle responsive-img" style={{width:'100px'}} />
                <h4 className="center-align">{login} </h4>
                <div>
                <Link to={`/user/${login}`} className="btn waves-effect red center-align">
                    More
                </Link>
                </div>
            </div>
        )
    
}
export default  userItem