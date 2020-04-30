import React from 'react'
import {Link} from 'react-router-dom';

const Layout=(props)=> {
 
        return (
           
            <div>
                 <nav className="nav-extended" style={{background:'#333'}}>
             <div className="nav-wrapper">
              <a className="brand-logo center">Github Finder</a>
              <a  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link exact="true"  to="/"  >Home</Link></li>
                <li><Link exact="true"  to="/about" >About</Link></li>
              
              </ul>
            </div>
           
          </nav>
        
          <ul className="sidenav" id="mobile-demo">
           <li><Link exact="true" to="/" >Home</Link></li>
           <li><Link exact="true" to="/about">About</Link></li>
            
          </ul>
            </div>
        
        )
    
}
export default  Layout