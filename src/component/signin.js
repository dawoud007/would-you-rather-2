import React, { Component } from 'react';
import { connect } from 'react-redux';

 

import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';
import { setAuthedUser } from '../actions/authedUser';

class Signin extends Component {
    state={
        choosed: ''
    }

   

    submitting = (e) => {
        e.preventDefault()
    if(this.state.choosed===''){
      return alert("please select a user")
    }
    this.props.dispatch(setAuthedUser(this.state.choosed));
    }
    changeValue = (value) => { 
        this.setState({ choosed: value})
    }

    render () {
        const users  = this.props.users;
        
        const options=  Object.keys(users).map(autheduser => {
           return(
               
            <MenuItem key={autheduser} value={autheduser}>
                <h2>{users[autheduser].name}{`   _________________    `}
                <img  className="loginimg" alt={users[autheduser].name} src={users[autheduser].avatarURL}  />  </h2>
                                              
            
              </MenuItem>
           )
        })

        return (
            <div className="login-container">
               <h1 className='login-title'>would you raher</h1>
                <li><p className="head">Select a character</p></li>
                    
             <li>       <Select className='loginselect'
                        
                        value={this.state.choosed}
                        placeholder='select............?'
                     
                        onChange={(e)=>this.changeValue(e.target.value)} 
                    >
                        
                          
                        {options}
                    </Select></li>
               
                <li><button  className='inbutton'
                    onClick={this.submitting} 
                    disabled={!this.state.choosed}
                    
                >
                    log in now
                </button></li>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        users
    }
  }
  
export default connect(mapStateToProps)(Signin);