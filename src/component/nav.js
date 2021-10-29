import React, { Component } from 'react';
import { setAuthedUser}  from '../actions/authedUser';
import { connect } from 'react-redux';

import {  NavLink} from "react-router-dom"

class Nav extends Component {

  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  }

  render() {

    const {images}=this.props
    return (
      <header className='header'>
      <ul className="navbar">
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            NEW
          </NavLink>
        </li>
        <li>
          <NavLink to='/leader' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
       
        <li >
       
          <span >welcome: <strong>{this.props.authedUser}</strong></span>

          <img  className="author-imag" src={images} alt={this.props.authedUser } style={{marginLeft:'15px'}}/>
         
 
       
      </li>
      <li>
      <span
          style={{marginLeft:'25px'}}
          className='btn'
          onClick={this.handleLogout}>
          logout
        </span>
      </li>
      </ul>
      
    </header>
    )
  }
}

function mapStateToProps({ authedUser ,users}) {
    
  const images = users[authedUser].avatarURL;

  return {
    authedUser,
    images,
  }
}

export default connect(mapStateToProps)(Nav);
